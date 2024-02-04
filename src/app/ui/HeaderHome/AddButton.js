"use client"
import { useRouter } from "next/navigation"

export function AddButton() {
    const router = useRouter()
    return (
        <button onClick={()=>router.push("/adduser")} className="text-blue px-3 py-1 rounded">Add</button>
    )
}