import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "My Awesome Blog",
    template: "%s - My Awesome Blog", // #show open page name with default title
  },
  description: "Come and read my awesome articles!",
  twitter: {
    // description: "", # show description of shared link
    card: "summary_large_image", // #show large OG image for shared link
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
