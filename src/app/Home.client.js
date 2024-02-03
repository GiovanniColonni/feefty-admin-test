"use client";
import { useState } from 'react';
import ScreenApp from './Screen';
import Header from './components/Header.client';

function onClick() {
    console.log('Button clicked');
}

export default function Home() {
    const [edit, setEdit] = useState(false);
    return (
        <>
            <div className="flex justify-between item-center mx-4">
                <Header onClick={onClick} edit={edit}/>
            </div>
            <ScreenApp />
        </>
    );
}