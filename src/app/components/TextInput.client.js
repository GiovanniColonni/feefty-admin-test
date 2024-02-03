"use client"

export default function TextInputC({ id, label, register }) {
    return (
        <>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                id={id}
                {...register(id)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </>
    )
}