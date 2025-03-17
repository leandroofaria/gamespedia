"use client"
import { useRouter } from "next/navigation" 
import { FormEvent, useState } from "react"
import { FiSearch } from 'react-icons/fi'

export function Input() {
    const [input, setInput] = useState("")
    const router = useRouter() 

    function handleSearch(event: FormEvent) {
        event.preventDefault();

        if (input.trim() === "") return; 

        router.push(`/game/search/${input}`)
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
