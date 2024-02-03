"use client"
import TextInputC from "./TextInput.client";


function TitleHeader({ title }) {
    return (
        <>
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">{title}</h2>
            <div className="border-t border-gray-200 border-opacity-50 w-full"></div>
        </>
    )
}

function Form({ register, error }) {
    return (
        <div className="mb-6">
            <TitleHeader title={"User info"} />
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                    <TextInputC id={"firstName"} label={"First Name"} register={register} />
                </div>

                <div className="sm:col-span-6">
                    <TextInputC id={"lastName"} label={"Last Name"} register={register} />
                </div>

                <div className="sm:col-span-6">
                    <TextInputC id={"email"} label={"Email Address"} register={register} />
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Role
                    </label>
                    <select
                        id="role"
                        {...register("role")}
                        autoComplete="role"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option>Account manager</option>
                        {/* Add more role options here */}
                    </select>
                </div>
            </div>
        </div>
    )
}

export function UpdateUserForm({ onSubmit, register, error }) {
    return (
        <div className="flex-grow">
            <form onSubmit={onSubmit}>
                <div className="bg-white drop-shadow-lg py-6 px-4">
                    <Form onSubmit={onSubmit} register={register} error={error} />
                    <TitleHeader title={"Danger Zone"} />
                    <div className="px-4 py-3 sm:px-6 flex justify-start">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="px-4 py-3 sm:px-6 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export function AddUserForm({ onSubmit, register, error }) {
    return (
        <div className="flex-grow">
            <form onSubmit={onSubmit}>
                <div className="bg-white drop-shadow-lg py-6 px-4">
                    <Form onSubmit={onSubmit} register={register} error={error} />
                </div>
                <div className="px-4 py-3 sm:px-6 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}