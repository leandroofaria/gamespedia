import { Container } from "@/components/container";
import { GameProps } from '@/utils/types/game'
import Link from 'next/link'
import Image from 'next/image'


async function getGame () {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`)
    return res.json()
  } catch {
    throw new Error("Falha ao pegar os dados")
  }
}

export default async function Home() {

  const game: GameProps = await getGame()

  return (
    <main className="w-full">
      <Container>
        <Link href={`/game/${game.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image 
            src={game.image_url}
            alt={game.title}
            priority={true}
            quality={100}
            width={100}
            height={100}
            />
          </section>
        </Link>
      </Container>
    </main>
  )
}