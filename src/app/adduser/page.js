import { BackButton } from "@/app/ui/HeaderBack/BackButton"
import UserForm from "../ui/UserForm"

export default async function AddUser(){
    return(
        <div className='flex flex-col items-center space-y-4'>
            <div className='flex justify-between items-center mx-4 w-full w-375 h-18'>
                <BackButton />
            </div>
            <div className='w-full bg-white drop-shadow-lg xs:rounded-xl'>
               <div>
                     <h1 className="font-normal font-semibold:text-medium text-large leading-normal">User Info</h1>
                     <div></div>
               </div>
               
                <UserForm />
                
            </div>
        </div>
    )
}