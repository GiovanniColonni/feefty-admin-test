import { updateUser, getUserById, deleteUserById } from "@/app/actions"
import { BackButton } from "@/app/ui/BackButton"
import UserForm from "@/app/ui/UserForm"

export default async function updateuser({ params }) {
    const { id } = params
    
    const user = await getUserById(id)
    
    if(!user){
        return <div>User not found</div>
    }

    return (
        <>
            <div className='flex justify-between items-center mx-4 w-full w-375 h-18'>
                <BackButton />
            </div>
            <div>
                <h1 className="font-normal font-semibold:text-medium text-large leading-normal">User Info</h1>
                <div></div>
            </div>
            <UserForm id={id} defaultValues={user}/>
        </>
    )
}



