"use server"
import { ModifyButton } from '@/app/ui/ModifyButton';
import { getUsers, changeUserState } from './actions';
import './globals.css'
import { AddButton } from '@/app/ui/AddButton';
import EmptyList from './ui/EmpyList';
import { body_div } from './ui/Boxes';


export default async function Home() {
    const users = await getUsers();

    const getStatusBoolean = (status) => {
        return status === 'active';
    }

    const noUsers = users.length === 0;

    return (
        <div className={body_div}>
            <div className='flex py-0 px-4 justify-between items-center w-[23.4375rem] pb-[16px]'>
                <div className="text-lg font-medium leading-[100%]">Users</div>
                <AddButton />
            </div>
            <div id='userlistdiv' className='overflow-y-auto list flex flex-col items-start w-full bg-white'>
                {
                    noUsers ? (
                        <EmptyList />
                    ) : (
                        <>
                            {users.map((user, _idx) => {
                                return (
                                    <div key={_idx} className="flex items-center gap-3 self-stretch p-4 border-b border-b-[#bccadc]/50">
                                        <form action={changeUserState}>
                                            <input type='hidden' name='id' value={user.id} />
                                            <button
                                                type="submit"
                                                className={`w-[38px] h-[20px] ${getStatusBoolean(user.status) ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex items-center justify-center rounded-full cursor-pointer`}
                                                aria-pressed={getStatusBoolean(user.status)}>
                                                <span
                                                    className={`block w-6 h-[20px] bg-white rounded-full shadow transform transition-transform duration-300 ${getStatusBoolean(user.status) ? 'translate-x-[8px]' : 'translate-x-[-8px]'}`}
                                                ></span>
                                            </button>
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