import type { CustomNextPage } from "next";
import { Layout } from "src/Layout/Layout";

const About: CustomNextPage = () => {
  return (
    <div>
      <h1 className="text-9xl">About</h1>
    </div>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;


export default About;
