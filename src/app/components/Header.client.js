"use client"
import AddButton from "./AddButton.client.js";

export default function Header({ onClick,edit }) { 
    return(
        <>
          <h1 className="text-lg">Users</h1>
          <AddButton onClick={onClick}>Button</AddButton>
        </>
    )
}