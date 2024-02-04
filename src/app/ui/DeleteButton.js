export function DeleteButton({...props}) {
    return (
        <button form="deleteform" {...props}
        className="inline-flex items-center gap-1.5 py-1 px-4 rounded-sm border border-danger bg-danger text-white text-sm leading-[100%]">
            DELETE
        </button>
    )
}


