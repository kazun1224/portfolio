import type { CustomNextPage } from "next";
import { Layout } from "src/Layout/Layout";

const Contact: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-9xl">Contact</h1>
    </div>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;


export default Contact;
