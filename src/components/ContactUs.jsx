import Container from "./Container";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CtnSLVuHNGI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function ContactUs() {
  return (
    <section className="w-full  py-24 lg:py-32 bg-gray-900">
      <Container>
        <div className="grid lg:grid-cols-2 w-full  gap-12">
          <div className="flex items-center text-center lg:text-start justify-center lg:justify-start">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-white">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold  sm:text-5xl font-serif  text-white">
                Contact our Sales Team
              </h2>
              <p className="max-w-[500px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {`Ready to get started? Fill out the form below and we'll be in
                touch shortly to help you with your request.
              `}
              </p>
            </div>
          </div>
          <div className="flex flex-col  justify-center  w-full h-full gap-5">
            <div className="flex items-center space-x-4 max-w-xs mx-auto w-full">
              <PhoneIcon className="w-6 h-6 flex-shrink-0 text-white" />
              <div className="leading-none space-y-2">
                <h3 className="font-medium text-white">
                  Sunati-ne la Telefon:
                </h3>
                <p className="text-sm text-white ">0791234567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 max-w-xs mx-auto w-full">
              <MailIcon className="w-6 h-6 flex-shrink-0 text-white" />
              <div className="leading-none space-y-2">
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-sm text-white">
                  marketing.extension.con@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
