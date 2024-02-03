"use client"
import TextInputC from "./TextInput.client";

export default function UserForm({ onSubmit, register, error }) {
    return (<form onSubmit={onSubmit}>
        {/* User info section */}
        <div className="mb-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">User info</h2>
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
                        name="role"
                        autoComplete="role"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option>Account manager</option>
                        {/* Add more role options here */}
                    </select>
                </div>
            </div>
        </div>
    </form>)
}