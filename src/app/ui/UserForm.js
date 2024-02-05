"use client"
import { useState } from "react";
import { addUser, deleteUserById, updateUser } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserModel } from "../adduser/UserForm/model";

import TextInput, { TextInputSelect } from "@/app/ui/TextInput";
import DeleteConfirm from "@/app/ui/DeleteConfirm";
import { Toast } from "./Toast";
import FormTitle from "./FormTitle";
import { useRouter } from "next/navigation";

export default function UserForm({ id = null, defaultValues = {}, deleteFlag = false, roles }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(UserModel),
        defaultValues: defaultValues// Use the Zod schema for validation
    });

    const isEdit = Object.keys(defaultValues).length > 0 && id !== null
    const router = useRouter()
    const [actionDone, setActionDone] = useState(false)
    const [actionError, setActionError] = useState(false)

    const handleToastDone = () => {
        setTimeout(() => {
            setActionDone(false)
        }, 3000)
    }

    const handleToastError = () => {
        setTimeout(() => {
            setActionError(false)
        }, 3000)
    }

    const onSubmit = async (data) => {
        
        if (isEdit) {
            const done = await updateUser(id, data);
            if (done) {
                setActionDone(true)
                handleToastDone()
            } else {
                setActionError(true)
                handleToastError()
            }

        } else {
            const done = await addUser(data);
            if (done) {
                setActionDone(true)
                handleToastDone()
                reset()
            } else {
                setActionError(true)
                handleToastError()
            }
        }
        return
    }

    const onErrorSubmit = (err) => {
        handleToastError()
    }

    const onDelete = async () => {
        const done = await deleteUserById(id);
        if (done) {
            handleToastDone()
        }
    }

    const isErrorField = (field) => {
        return errors[field] !== undefined
    }

    return (
        <>
            <form id="submitform" onSubmit={handleSubmit((data) => onSubmit(data), (err) => onErrorSubmit(err))}>
                <>
                    <TextInput id={"firstName"} label={"First Name"} register={register} err={isErrorField("firstName")} />
                    <TextInput id={"lastName"} label={"Last Name"} register={register} err={isErrorField("lastName")} />
                    <TextInput id={"email"} label={"Email"} register={register} err={isErrorField("email")} />
                    <TextInputSelect roles={roles} id={"roleId"} label={"Role"} register={register} err={isErrorField("roleId")} />
                    {isEdit ? (<div>
                        <FormTitle title={"Danger Zone"} />
                        <DeleteConfirm onDelete={onDelete} deleteFlag={deleteFlag} />
                    </div>) : null}
                </>
                <Toast show={actionDone} message={"Action done"} ok={true} />
                <Toast show={actionError} message={"Action NOT done"} ok={false} />

            </form>
        </>
    )
}
