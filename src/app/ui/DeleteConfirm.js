"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DeleteButton } from "./DeleteButton"

export default function DeleteConfirm({ onDelete }) {
    const router = useRouter()

    const [deleteFlag, setDeleteFlag] = useState(false)

    const onOpenDelete = () => {
        setDeleteFlag(prev => !prev)
    }

    const onCloseDelete = () => {
        setDeleteFlag(false)
    }

    return (
        <div>
            <DeleteButton onClick={onOpenDelete} className="bg-red-500 text-white px-2 py-1 rounded-lg" />
            {deleteFlag ? (
                <>
                    <div className="flex flex-col">
                        <h1>Are you sure?</h1>
                        <button onClick={onDelete}>Click 3 times to confirm</button>
                        <button onClick={onCloseDelete}>No</button>
                    </div>
                </>
            ) : null}
        </div>
    );
}