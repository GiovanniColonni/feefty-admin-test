export default function TextInput({ id, label, register }) {
    return (
        <div className="flex flex-col w-343">
            <label className="text-gray-600 font-normal text-xs mb-1">{label}</label>
            <input
                {...register(id)}
                type="text"
                className="bg-white border border-gray-300 rounded-md p-2 flex-grow focus:outline-none"
            />
        </div>
    );
}