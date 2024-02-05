import { getUserById, getRoles } from "@/app/actions"
import { BackButton } from "@/app/ui/BackButton"
import FormTitle from "@/app/ui/FormTitle"
import UserForm from "@/app/ui/UserForm"
import { SaveButton } from "@/app/ui/SaveButton";
import { body_div } from "@/app/ui/Boxes";
import UserNotFound from "@/app/ui/UserNotFound";


export default async function updateuser({ params }) {
    const { id } = params

    const user = await getUserById(id)
    const roles = await getRoles() 

    return (
        <div className={body_div}>
            <div className='flex flex-col justify-center items-start gap-3 py-0 px-4 w-[23.4375rem] pb-[16px]'>
                <BackButton />
                <div className="text-[#0e1823] text-lg font-medium leading-[100%]">{(() => (user ? `Edit ${user.firstName} ${user.lastName}` : "User not found"))()}</div>
            </div>
            {user ? (
                <>
                    <div className="form bg-white flex flex-col items-start gap-4 p-4 w-full">
                        <FormTitle title={"User info"} />
                        <UserForm roles={roles} id={id} defaultValues={user} />
                    </div>
                    <div className="flex justify-end items-start self-stretch py-4 px-4">
                        <SaveButton />
                    </div>
                </>
            ) : <UserNotFound />}
        </div>
    )
}


