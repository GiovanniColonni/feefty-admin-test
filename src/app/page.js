import { getUsers } from './actions';
import './globals.css'
import { AddButton } from '@/ui/HeaderHome/AddButton';


export default async function Home() {
    // Qui puoi gia' leggere i dati dal server chiamando quello che c'e' scritto dentro data
    // pero' devi fare readDdata() e non readDataPrisma() ! cosi' sarebbe ortogonale 
    // Non c'e' una Business Logic vera e propria che si puo' separare poi dalla lettura dai dati
    // ma in questo punto puoi comunque fare read, e fare un adapter che passi aread in case a un setting
    // in modo che sia l'oggetto che gli passi a dare la specifica logica (dependency injection)
    // queste vanno in actions.js  
    const users = await getUsers();
    console.log(users);
    const noUsers = users.length === 0;
    return (
        <div className='flex flex-col items-center space-y-4'>
            <div className='flex justify-between items-center mx-4 w-full w-375 h-18'>
                <h1 className="font-normal font-semibold:text-medium text-large leading-normal">Users</h1>
                <AddButton />
            </div>
            <div className='w-full bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl'>
                {
                    noUsers ? (
                        <>
                            <p className="text-center text-gray-600 font-medium">Oh well...</p>
                            <p className="text-center text-gray-600 font-normal">
                                Looks like there are no users here yet.
                                <br />
                                Add a new user to see it here!
                            </p>
                        </>
                    ) : (
                        <div className='flex flex-col items-center space-y-4'>
                            {users.map((user,_idx) => {
                                return(<div key={_idx} className="flex  items-center">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded-lg">
                                        Button1
                                    </button>
                                    <div className="flex flex-col">
                                        <div>{user.firstName}</div>
                                        <div>{user.email}</div>
                                    </div>
                                    <button>M</button>
                                </div>)
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    );
}


