"use client"
import { useRouter } from "next/navigation"
import { modify } from "./icons"

export function ModifyButton({id}) {
    const router = useRouter()
    return (
        <button className={"flex justify-center items-center gap-2.5 p-2 rounded-full border border-[#104ee9] bg-white"} onClick={()=>router.push(`/updateuser/${id}`)}>
        {modify}
        </button>
    )
}
