import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOP pattern",
  description: "Generate GOP pattern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-slate-400 flex justify-center items-center container m-auto p-2 font-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
