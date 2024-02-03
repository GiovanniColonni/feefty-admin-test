"use client"

import { useState } from "react";
import {DisplayUsers} from "./DisplayUsers";
import EmptyList from "./components/EmptyList";

function ScreenApp() {
    const [showUsers, setShowUsers] = useState(false);

    if(showUsers){
        return <DisplayUsers/>
    }

    return <EmptyList/>    
}

export default ScreenApp;