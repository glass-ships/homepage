import Head from "next/head";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glass Ships",
  description: "Scientific Software Engineer",
  // icons: {
  //   icon: [
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       url: "/logo.png",
  //     },
  //   ],
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
          <link rel="shortcut icon" href="/images/logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png"/>
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" /> */}
</Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
