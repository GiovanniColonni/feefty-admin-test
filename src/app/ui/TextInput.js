export default function TextInput({ id, label, register,err }) {
    const styleBorder = err ? "border-red-500" : "border-gray-300";
    const classNameInput = `h-32 px-8 py-8  stretch border ${styleBorder} `;
    return (
        <div className="flex flex-col w-343 px-4 py-[8px]">
            <label className="text-gray-600 font-normal text-xs mb-1 gap-2">{label}</label>
            <input
                {...register(id)}
                type="text"
                className={classNameInput}
            />
        </div>
    );
}



