"use client"
import { TitleBar, IconButtonAdd } from "./TitleBar.js";

export default function Header({ onClickAdd,mode,onClickBack }) {
     
    return (
        <div className="flex justify-between items-center p-2 pt-2 gap-2 w-full max-w-6xl" style={{ height: '40px' }}>
            <TitleBar title={"Users"} />
            <IconButtonAdd text={"Add"} type={"deault"} onClick={onClickAdd} />
        </div>
    )
}