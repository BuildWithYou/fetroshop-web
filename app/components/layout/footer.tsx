import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="mt-6 border-primary sm:mx-auto dark:border-primaryDark lg:mt-8" />
      <div className="w-full flex flex-col sm:flex-row justify-center bg-slate-500/30 backdrop-blur h-72 pt-6 lg:pt-8 px-4">
        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col sm:flex-row justify-between">
          <div className="w-full xl:w-2/3 mb-10 md:mb-0">
            <span className="text-sm text-dark dark:text-primary font-semibold sm:text-center">
              © 2023{" "}
              <Link
                href="/"
                className="hover:underline hover:text-primary hover:dark:text-primary "
              >
                Fetroshop
              </Link>
              .
            </span>
          </div>
          <div className="w-full xl:w-1/3 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-primary">
                Elsewhere
              </h2>
              <ul className="text-secondary dark:text-primaryDark font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/asrozy98"
                    className="hover:underline hover:text-primary hover:dark:text-primary"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://facebook.com/asrozy98"
                    className="hover:underline hover:text-primary hover:dark:text-primary"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://instagram.com/asrozy98"
                    className="hover:underline hover:text-primary hover:dark:text-primary"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/mfaisalasrozy"
                    className="hover:underline hover:text-primary hover:dark:text-primary"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-dark uppercase dark:text-primary">
                Email
              </h2>
              <ul className="text-secondary dark:text-primaryDark font-medium">
                <li className="mb-4">
                  <Link
                    href="mailto:fetroshop@gmail.com"
                    className="hover:underline hover:text-primary hover:dark:text-primary"
                  >
                    fetroshop@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
