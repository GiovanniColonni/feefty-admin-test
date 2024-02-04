"use client"
import { useRouter } from "next/navigation"

export function AddButton() {
    const router = useRouter()
    return (
        <button onClick={()=>router.push("/adduser")} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
    )
}