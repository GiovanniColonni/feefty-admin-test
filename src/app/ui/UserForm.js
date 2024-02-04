"use client"
import { addUser,deleteUserById } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserModel } from "../adduser/UserForm/model";

import TextInput from "@/app/ui/TextInput";

export default function UserForm({id = null,defaultValues = {}}) {
    console.log("id",id,"defaultValues",defaultValues)
    const isEdit = Object.keys(defaultValues).length > 0 && id !== null

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UserModel), // Use the Zod schema for validation
    });

    const onSubmit = async (data) => {
        console.log("data", data);
        const done = await addUser(data);
        // TODO snackbar error or correct
    }

    const onErrorSubmit = (errors) => {
        console.log(errors);
        // TODO snackbar error
    }

    const onDelete = async () => {
        // TODO snackbar error or correct
        const done = await deleteUserById(id);
        if(done){
            console.log("User deleted")
        }
    }

    return (
        <>
            <form id="submitform" onSubmit={handleSubmit((data) => onSubmit(data),(err)=>onErrorSubmit(errors))}>
                <div className='w-full bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl'>
                    <TextInput id={"firstName"} label={"First Name"} register={register} />
                    <TextInput id={"lastName"} label={"Last Name"} register={register} />
                    <TextInput id={"email"} label={"Email"} register={register} />
                    <TextInput id={"roleId"} label={"Role"} register={register} />
                    {isEdit? (<div>
                    Danger zone
                        <button onClick={()=>onDelete()} form="deleteform" className="bg-red-500 text-white px-2 py-1 rounded-lg">
                            Delete
                        </button>
                </div>):null }
                </div>
                <button form={"submitform"} type="submit" className="bg-blue-500 text-white rounded-md p-2 mt-4">Save</button>
            </form>

        </>
    )
}