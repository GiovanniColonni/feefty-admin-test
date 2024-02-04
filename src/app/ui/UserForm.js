"use client"
import { useState } from "react";
import { addUser, deleteUserById, updateUser } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserModel } from "../adduser/UserForm/model";

import TextInput from "@/app/ui/TextInput";
import DeleteConfirm from "@/app/ui/DeleteConfirm";
import { GoodToast } from "./Toast";

export default function UserForm({ id = null, defaultValues = {}, deleteFlag = false }) {

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
        // TODO refactoring
        console.log("good data", data);

        if (isEdit) {
            const done = await updateUser(id, data);
            if (done) {
                console.log("User updated")
                setActionDone(true)
                handleToastDone()
            } else {
                console.log("User not updated")
                setActionError(true)
                handleToastError()
            }

        } else {
            const done = await addUser(data);
            if (done) {
                console.log("User saved")
                setActionDone(true)
                handleToastDone()
                reset()
            } else {
                console.log("User not saved")
                setActionError(true)
                handleToastError()
            }
        }
        return
    }

    const onErrorSubmit = (err) => {
        console.log("err", err);
        console.log("err keys ", Object.keys(err));
        console.log("errors ", errors)
        // TODO snackbar error
    }

    const onDelete = async (e) => {
        e.preventDefault()
        // TODO snackbar error or correct
        const done = await deleteUserById(id);
        if (done) {
            console.log("User deleted")
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
                    <TextInput id={"roleId"} label={"Role"} register={register} err={isErrorField("roleId")} />
                    {isEdit ? (<div>
                        <div className="flex flex-col items-start gap-2 self-stretch">
                            <div className="self-stretch text-[#0e1823] text-sm font-medium leading-[120%]">Danger Zone</div>
                            <div className="w-[21.4375rem] h-px bg-[#bccadc]/50" />
                        </div>
                        <DeleteConfirm onDelete={onDelete} deleteFlag={deleteFlag} />
                    </div>) : null}
                </>
                <GoodToast show={actionDone} message={"Action done"} onClose={() => setActionDone(false)} />
                <GoodToast show={actionError} message={"Action NOT done"} onClose={() => setActionError(false)} />

            </form>
        </>
    )
}
