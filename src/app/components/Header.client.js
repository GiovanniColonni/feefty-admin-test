"use client"
import { TitleBar, IconButtonAdd,IconButtonBack } from "./TitleBar.js";

export function HeaderHome({ onClickAdd }) {
     
    return (
        <div className="flex justify-between items-center p-2 pt-2 gap-2 w-full max-w-6xl" style={{ height: '40px' }}>
            <TitleBar title={"Users"} />
            <IconButtonAdd text={"Add"} type={"deault"} onClick={onClickAdd} />
        </div>
    )
}

export function Header({ onClickBack }) {
     
    return (
        <div className="flex justify-between items-center p-2 pt-2 gap-2 w-full max-w-6xl" style={{ height: '40px' }}>
            <IconButtonBack text={"Back"} type={"deault"} onClick={onClickBack} />
        </div>
    )
}