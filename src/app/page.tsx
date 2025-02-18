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

export const revalidate = 60; // revalidar a cada 60 segundos

export default function Home() {

  const numberRandom = Math.random() * 25;

  return (
    <div>
      <h1>oi</h1>

      <h2 className="font-bold">Número: {numberRandom}</h2>
    </div>
  )
}