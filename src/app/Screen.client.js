"use client"

import { useState } from "react";
import {DisplayUsers} from "./DisplayUsers";
import EmptyList from "./components/EmptyList";
import AddUser from "./AddUser.client";

function ScreenApp({edit}) {
    const [showUsers, setShowUsers] = useState(false);

    if(edit){
        return (
            <AddUser/>
        )
    }

    if(showUsers){
        return <DisplayUsers/>
    }

    return <EmptyList/>    
}

export default ScreenApp;