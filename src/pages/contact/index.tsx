import axios from "axios";
import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { ComponentProps, useState } from "react";
import { Layout } from "src/Layout";

const Contact: CustomNextPage = () => {
  const router = useRouter();
  const [failure, setFailure] = useState(false);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: "/api/email",
      data: {
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        company: e.currentTarget.company.value,
        email: e.currentTarget.email.value,
        subject: e.currentTarget.subject.value,
        message: e.currentTarget.message.value,
      },
    })
      .then((res) => {
        console.log(res);
        router.push("/contact/end");
      })
      .catch(() => {
        setFailure(true);
      });
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/*  text - start  */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Contact
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          下記からお問い合わせください。
        </p>
      </div>
      {/*  text - end  */}

      {/*  form - start  */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
      >
        <div>
          <label
            htmlFor="first-name"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            姓*
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            placeholder="田中"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
            required
          />
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            名*
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            placeholder="太郎"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            会社
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="株式会社○○"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            メールアドレス*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            件名*
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="○○の件について"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            内容*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="お問い合わせ内容"
            className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between sm:col-span-2">
          <button
            type="submit"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
          >
            送信
          </button>

          <span className="text-sm text-gray-500">*Required</span>
        </div>
      </form>
      {failure ? (
        <p className="mx-auto grid max-w-screen-md py-5 text-red-500">
          送信に失敗しました。 <br />
          お時間をおいておといあわせ頂くか、内容をご確認の上の再度お試しください。
        </p>
      ) : null}
      {/*  form - end  */}
    </div>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
