import type { CustomNextPage } from "next";
import { Layout } from "src/Layout";

const Contact: CustomNextPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/*  text - start  */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Contact
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          お気軽にお問い合わせください。
        </p>
      </div>
      {/*  text - end  */}

      {/*  form - start  */}
      <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
          >
            姓*
          </label>
          <input
            name="first-name"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
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
            name="last-name"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
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
            name="company"
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
            name="email"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
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
            name="subject"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
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
            name="message"
            className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-green-300 transition duration-100 focus:ring"
          ></textarea>
        </div>

        <div className="flex items-center justify-between sm:col-span-2">
          <button className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
            送信
          </button>

          <span className="text-sm text-gray-500">*Required</span>
        </div>

        <p className="text-xs text-gray-400">
          By signing up to our newsletter you agree to our{" "}
          <a
            href="#"
            className="underline transition duration-100 hover:text-green-500 active:text-green-600"
          >
            Privacy Policy
          </a>
          .
        </p>
      </form>
      {/*  form - end  */}
    </div>
  );
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
