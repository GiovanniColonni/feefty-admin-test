"use client"
import { addUser } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserModel } from "./model";

import TextInput from "@/ui/TextInput";

export default function UserForm() {
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


    return (
        <>
            <form onSubmit={handleSubmit((data) => onSubmit(data),(err)=>onErrorSubmit(errors))}>
                <div className='w-full bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl'>
                    <TextInput id={"firstName"} label={"First Name"} register={register} />
                    <TextInput id={"lastName"} label={"Last Name"} register={register} />
                    <TextInput id={"email"} label={"Email"} register={register} />
                    <TextInput id={"roleId"} label={"Role"} register={register} />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-md p-2 mt-4">Save</button>
            </form>

        </>
    )
}