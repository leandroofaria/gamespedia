"use client"
import { useRouter } from "next/navigation" // ✅ Correção: importar do "next/navigation"
import { FormEvent, useState } from "react"
import { FiSearch } from 'react-icons/fi'

export function Input() {
    const [input, setInput] = useState("")
    const router = useRouter() // ✅ Agora sem erro

    function handleSearch(event: FormEvent) {
        event.preventDefault(); // ✅ Correção: adicionar parênteses

        if (input.trim() === "") return; // ✅ Evita redirecionamento se o input estiver vazio

        router.push(`/game/search/${input}`) // ✅ Mantido corretamente
    }

    return (
        <form 
            onSubmit={handleSearch} 
            className="w-full bg-slate-100 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
        >
            <input 
                type="text" 
                placeholder="Procurando algum jogo?" 
                value={input} 
                onChange={(event) => setInput(event.target.value)} 
                className="bg-slate-100 outline-none w-11/12"
            />
            <button type="submit">
                <FiSearch size={24} color="#9D44B5"/>
            </button>
        </form>
    )
}
