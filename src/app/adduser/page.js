import { BackButton } from "@/app/ui/BackButton"
import { getRoles } from "@/app/actions"
import UserForm from "../ui/UserForm"
import { SaveButton } from "@/app/ui/SaveButton";
import FormTitle from "../ui/FormTitle";
import { body_div } from "../ui/Boxes";

export default async function AddUser() {
    const roles = await getRoles() // i take advantage of the SSR

    return (
        <div className={body_div}>
            <div className='flex flex-col justify-center items-start gap-3 py-0 px-4 w-[23.4375rem] pb-[16px]'>
                <BackButton />
            </div>
            <div className="form bg-white flex flex-col items-start gap-4 p-4 w-full">
                <FormTitle title="Add user" />
                <UserForm roles={roles}/>
            </div >
            <div className="flex justify-end items-start self-stretch py-4 px-4">
                <SaveButton />
            </div>
        </div>
    )
}