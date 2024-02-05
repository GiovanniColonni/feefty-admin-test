import { select_mark } from "./icons";

export default function TextInput({ id, label, register, err }) {
    const styleBorder = err ? "border-red-500" : "border-gray-300";
    const classNameInput = `h-32 px-8 py-16 stretch border ${styleBorder} focus:outline-none `;
    return (
        <div className="flex flex-col py-[8px] w-[343px]">
            <label className="text-gray-600 font-normal text-xs mb-[4px] gap-2">{label}</label>
            <input
                {...register(id)}
                type="text"
                className={classNameInput}
            />
        </div>
    );
}


export function TextInputSelect({ id, label, register, err, roles }) {
    const styleBorder = err ? "border-red-500" : "border-gray-300"; // red in case of error
    const classNameInput = `bg-white px-8 py-[4px] stretch border ${styleBorder}`;
    
    const {e,...ref} = register(id)
    
    return (
        <div className="flex flex-col py-[8px] w-[343px] relative">
            <label className="text-gray-600 font-normal text-xs mb-[4px] gap-2">{label}</label>
            <select
                name="roleId"
                {...register(id)}
                className={classNameInput}
            >
                {roles.map((role, idx) => {
                    return (
                        <option key={idx} value={role.value}>{role.label}</option>
                    )
                })}
            </select>
            <div className="bg-transparent pointer-events-none inset-y-[45px] absolute right-0 pr-3">
                    {select_mark}
            </div>
        </div>
    );
}
