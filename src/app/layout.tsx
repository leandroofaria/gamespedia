import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: 

Metadata = {
  title: "Game Pedia - Descubra jogos incríveis para se divertir!",
  description: "Muitos jogos separados e organizados para você.",
  keywords: ['games', 'jogos', 'steam'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
