"use server"
import { ModifyButton } from '@/app/ui/Home/ModifyButton';
import { getUsers, changeUserState } from './actions';
import './globals.css'
import { AddButton } from '@/app/ui/AddButton';
import EmptyList from './ui/EmpyList';



export default async function Home() {
    const users = await getUsers();

    console.log(users);
    const noUsers = users.length === 0;
    return (
        <div className='flex flex-col items-start h-708 left-0 top-52 gap-1 pt-2 px-0 py-8'>
            <div className="flex justify-between items-center py-0 px-4 w-[23.4375rem]">
                <div className='flex justify-between items-center w-[23.4375rem] pb-8'>
                    <div className="text-lg font-medium leading-[100%]">Users</div>
                    <AddButton />
                </div>
            </div>
            {/*TODO set shadow list*/}

            <div id='userlistdiv' className='list flex flex-col items-start w-[23.4375rem] bg-white'>
                {
                    noUsers ? (
                        <EmptyList />
                    ) : (
                        <>
                            {users.map((user, _idx) => {
                                return (
                                    <div key={_idx} className="flex items-center gap-3 self-stretch p-4 border-b border-b-[#bccadc]/50">
                                        <form action={changeUserState}>
                                            <div className="flex items-center gap-1 py-0 pl-0 pr-5 rounded-full border border-[#bccadc]/50 bg-[#bccadc]/50">
                                                <input type="checkbox" value={user.id} className="sr-only peer" />
                                                <div className="w-4 h-4 rounded-full bg-white" />
                                            </div>
                                        </form>
                                        <div className="flex-1 flex-col items-start gap-1">
                                            <div className='flex flex-col justify-center self-stretch font-sans whitespace-no-wrap overflow-hidden text-gray-900 h-17 leading-[120%]'>{user.firstName}</div>
                                            <div className='flex flex-col justify-center self-stretch h-17 overflow-hidden text-gray-600 whitespace-no-wrap leading-[120%]'>{user.email}</div>
                                        </div>
                                        <ModifyButton id={user.id} />
                                    </div>
                                )
                            })}
                        </>
                    )
                }
            </div>
        </div>
    );
}



