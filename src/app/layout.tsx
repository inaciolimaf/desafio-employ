import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Head from "next/head";

const roboto = Roboto({ subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: "Employ",
  description: "Página de preços",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" /> {/* Referência ao favicon */}
      </Head>
      <body className={roboto.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
