import { excl } from "./icons"

export function DeleteButton({title="Delete",...props}) {
    return (
        <button form="deleteform" {...props}
        className="inline-flex items-center gap-1.5 py-1 px-4 rounded-sm border border-danger bg-danger text-white text-sm leading-[100%]">
            {title}
        </button>
    )
}


export function DeleteButtonConfirm({ title, ...props }) {
    return (
        <button {...props} className="flex flex-row justify-center items-center py-2 border border-danger bg-danger px-4 gap-4">
            <span className="">{excl}</span>
            <span className="text-white sf text-sm leading-[100%]">{title}</span>
        </button>
    );
}