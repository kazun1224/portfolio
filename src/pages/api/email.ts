import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Email = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

sgMail.setApiKey(process.env.SEND_GRIDE_MAIL_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const emailText: Email = req.body;

    const contactMail = {
      to: process.env.MY_MAIL_ADDRESS,
      from: req.body.email,
      subject: emailText.subject,
      text: `お問い合わせ内容 \n\n ${emailText.company} : ${emailText.firstName} ${emailText.lastName}様 \n ${emailText.message}`,
      html: `お問い合わせ内容 <br/> ${emailText.company}：${emailText.firstName} ${emailText.lastName}様 <br/>  ${emailText.message}`,
    };

    const replyMail = {
      to: req.body.email,
      from: process.env.MY_MAIL_ADDRESS,
      subject: emailText.subject,
      text: `お問合せを受け付けました。回答をお待ちください。\n\n ${emailText.company}：${emailText.firstName} ${emailText.lastName}様\n  ${emailText.message}`,
      html: `お問合せを受け付けました。回答をお待ちください。<br/> ${emailText.company}：${emailText.firstName} ${emailText.lastName}様<br/> ${emailText.message}`,
    };

    (async () => {
      try {
        await sgMail.send(contactMail);
        await sgMail.send(replyMail);
      } catch (error) {
        return res
          .status(error.statusCode || 500)
          .json({ error: error.message });
      }
    })();
  }

  return res.status(200).json({ error: "" });
};

export default handler;
