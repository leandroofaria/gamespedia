import { Container } from "@/components/container";
import { GameProps } from '@/utils/types/game'
import Link from 'next/link'
import Image from 'next/image'

import { BsArrowRightSquare } from 'react-icons/bs'
import { Input } from "@/components/input";


async function getGame () {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate:320}})
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
          <section className="w-full bg-black rounded-lg mt-8">
            <div className=" w-full max-h-72 h-72 relative rounded-lg ">
              <div className="absolute z-20 w-full flex justify-between p-5">
                <p className="font-bold text-xl text-white">{game.title}</p>
                <BsArrowRightSquare size={24} color="#FFF"/>
              </div>
              <Image 
              src={game.image_url}
              alt={game.title}
              priority={true}
              quality={100}
              fill={true}
              sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
              className="max-h-72 object-cover rounded-lg opacity-50 hover:opacity-70 transition-all duration-300" 
              />
            </div>
          </section>
        </Link>
        <Input></Input>

        
      </Container>
    </main>
  )
}