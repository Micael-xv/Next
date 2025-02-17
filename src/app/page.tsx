import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "NextJS",
  // o openGraph é utilizado para SEO
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

export default function Home() {
  return (
    <div>
      <h1>oi</h1>
    </div>
  )
}