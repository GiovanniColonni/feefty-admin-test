"use client";

import { useState } from 'react';
import ScreenApp from './Screen.client';
import Header from './components/Header.client';

export default function Home() {
    const [edit, setEdit] = useState(false);
    
    function onClickAdd() {
        setEdit(true)
    }
    
    function onClickBack() {
        setEdit(false)
    }

    return (
        <div className='flex-row'>
            <div className="justify-between item-center mx-4">
                <Header onClickBack={onClickBack} onClickAdd={onClickAdd} edit={edit}/>
            </div>
            <ScreenApp edit={edit} />
        </div>
    );
}