"use client"
import { useRouter } from "next/navigation"
import { plus } from '@/app/ui/icons'

export function AddButton() {
    const router = useRouter()
    return (
        <button onClick={()=>router.push("/adduser")} className="inline-flex items-center gap-1.5">
        <span className="w-14 h-14">{plus}</span>
        <span className="text-blue-primary sf text-sm leading-[100%]">Add</span>
      </button>
    )
}
