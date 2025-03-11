import Link from "next/link";

import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-20 bg-slate-100 px-2" >
      <div className="max-w-screen-xl mx-auto flex px-8 justify-center sm:justify-between items-center h-20">

        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <div className="text-3xl font-bold">
              <span>Game</span>
              <span className="text-[#9D44B5]">Pedia</span>
            </div>
          </Link>

          <Link href="/">Jogos</Link>

          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
            <Link href="/profile">
              <LiaGamepadSolid size={34} />
            </Link>
          </div>
      </div>
    </header>
  );
}
