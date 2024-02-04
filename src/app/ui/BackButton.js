"use client"
import { useRouter } from "next/navigation"
import { back } from "./icons"

export function BackButton() {
    const router = useRouter()
    return (
        <button
            className="flex flex-row items-center p-0 gap-2 w-47 h-14"
            onClick={() => router.push("/")}>
            <span>{back}</span>
            <span className="text-blue-primary font-normal leading-none flex items-center text-center">Back</span>
        </button>
    )
}