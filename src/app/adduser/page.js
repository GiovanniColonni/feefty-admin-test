import { BackButton } from "@/app/ui/BackButton"
import UserForm from "../ui/UserForm"
import { SaveButton } from "@/app/ui/SaveButton";

export default async function AddUser() {
    return (
        <div>
            <div className='flex justify-between items-center mx-4 w-full w-375 h-18'>
                <BackButton />
            </div>
            <div className="form bg-white flex flex-col items-start gap-4 p-4 w-[23.4375rem]">
                <div className='w-fulldrop-shadow-lg'>
                    <div className="flex flex-col items-start gap-2 self-stretch">
                        <div className="self-stretch text-[#0e1823] text-sm font-medium leading-[120%]">User info</div>
                        <div className="w-[21.4375rem] h-px bg-[#bccadc]/50" />
                    </div>
                    <UserForm />
                </div>
            </div >
            <div>

            </div>
            <div className="flex justify-end items-start self-stretch py-4 px-4">
                <SaveButton />
            </div>
        </div>
    )
}