"use client";
import './globals.css'

import { HeaderHome } from './components/Header.client';
import { DisplayUsers } from './components/DisplayUsers';
import { useRouter } from 'next/navigation';

function getUsers() {
    return fetch('/api/users')
        .then(response => response.json())
        .then(data => data.users);
}

export default function Home({initialUsers}) {
    const users = []; // THIS should come from the server
    const router = useRouter();

    function onClickAdd() {
        router.push('/AddUser');
    }
    
    return (
        <div className='flex-row'>
            <div className="justify-between item-center mx-4">
                <HeaderHome onClickAdd={onClickAdd}/>
            </div>
            <DisplayUsers />
        </div>
    );
}