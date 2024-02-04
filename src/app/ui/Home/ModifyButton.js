"use client"
import { useRouter } from "next/navigation"

export function ModifyButton({id}) {
    const router = useRouter()
    return (
        <button onClick={()=>router.push(`/updateuser/${id}`)} className="text-blue px-3 py-1 rounded">Modify</button>
    )
}
