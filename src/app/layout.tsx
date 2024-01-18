import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "../components/layout/header";
import Footer from "../components/layout/footer";
import Providers from "@/src/redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fetroshop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, " bg-light dark:bg-dark")}>
        <Providers>
          <div className="fixed z-50 top-0 w-full">
            <Headers />
          </div>
          <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 mt-28 lg:mt-32">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}