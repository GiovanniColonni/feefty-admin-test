export default function FormTitle({title}) {
    return (
        <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="self-stretch text-[#0e1823] text-sm font-medium leading-[120%]">{title}</div>
            <div className="w-[21.4375rem] h-px bg-[#bccadc]/50" />
        </div>
    )
}