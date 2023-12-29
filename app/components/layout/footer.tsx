import Link from "next/link";

export default function Footer() {
  return (
    <>
      <hr className="my-6 border-light sm:mx-auto dark:border-secondary lg:my-8" />
      <footer className="mx-auto w-full h-64 max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-sm text-light sm:text-center dark:text-primary">
              © 2023{" "}
              <Link href="https://flowbite.com/" className="hover:underline">
                Fetroshop
              </Link>
              .
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-light">
                Elsewhere
              </h2>
              <ul className="text-light dark:text-primary font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/asrozy98"
                    className="hover:underline"
                  >
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://facebook.com/asrozy98"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://instagram.com/asrozy98"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/mfaisalasrozy"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-blue-600 uppercase dark:text-light">
                Email
              </h2>
              <ul className="text-light dark:text-primary font-medium">
                <li className="mb-4">
                  <Link
                    href="mailto:fetroshop@gmail.com"
                    className="hover:underline"
                  >
                    fetroshop@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
