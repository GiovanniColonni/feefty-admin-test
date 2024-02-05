"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DeleteButtonConfirm, DeleteButton } from "./DeleteButton"

export default function DeleteConfirm({ onDelete }) {
    const router = useRouter()

    const [deleteFlag, setDeleteFlag] = useState(false)
    const [count3, setCount3] = useState(3)

    const onOpenDelete = () => {
        setDeleteFlag(prev => !prev)
    }

    const handleCountAndDelete = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        if (count3 === 0) {
            onDelete()
            return
        }
        setCount3(prev => prev - 1)
    }


    return (
        <div className="py-1">
            <DeleteButton title={!deleteFlag?"Delete":"Close"} onClick={onOpenDelete} />
            {deleteFlag ? (
                <>
                    <div className="flex flex-col m-1 py-[8px] px-24 border-4 border-dashed">
                        <h1 className="font-bold text-black">Are you sure?</h1>
                        <h3 className="text-gray-500 pb-3">This action is not reversable</h3>
                        <DeleteButtonConfirm title={`Click ${count3} times to confirm`} onClick={(e) => handleCountAndDelete(e)} />
                    </div>
                </>
            ) : null}
        </div>
    );
}