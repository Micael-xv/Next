import "./globals.css";

import { Header } from "../components/header";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NextJS",
  description: "Aula de NextJS",
  openGraph: {
    title: "Aprendendo NextJS",
    description: "Aprendendo NextJS com TailwindCSS",
  },

  robots: {
    index: true, // indexar
    follow: true, // seguir links
    nocache: true, // não armazenar em cache
    googleBot: { // configurações específicas para o Google
      index: true,
      follow: true, 
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <Header/>

        {children}    {/* Página onde é exibida */}
      </body>
    </html>
  );
}
