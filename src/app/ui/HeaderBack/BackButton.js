"use client"
import { useRouter } from "next/navigation"

export function BackButton() {
    const router = useRouter()
    return (
        <button onClick={()=>router.push("/")} className="bg-blue-500 text-white px-3 py-1 rounded">Back</button>
    )
}