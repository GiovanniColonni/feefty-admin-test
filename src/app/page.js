"use server"
import { ModifyButton } from '@/app/ui/Home/ModifyButton';
import { getUsers,changeUserState } from './actions';
import './globals.css'
import { AddButton } from '@/app/ui/HeaderHome/AddButton';


export default async function Home() {
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
                            {users.map((user, _idx) => {
                                return (<div key={_idx} className="flex  items-center">
                                    <form action={changeUserState}> {/** action changeUserState */}
                                        <input type="hidden" name="id" value={user.id} />
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded-lg">
                                            Button1
                                        </button>
                                    </form>
                                    <div className="flex flex-col">
                                        <div>{user.firstName}</div>
                                        <div>{user.email}</div>
                                    </div>
                                    <ModifyButton id={user.id}/>
                                </div>)
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    );
}


