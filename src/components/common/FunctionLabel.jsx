export default function FunctionLabel({ label = 'label', percent = NaN, up = false, down = false }) {
    return (
        <div className="flex text-label items-center">
            <span className="mr-[8px]">{label}</span>
            {!isNaN(percent) ? <span>{percent}%</span> : null}
            {up ? <img src="/images/icons/arrow-up-red.svg" className="w-[14px] h-[14px]" /> : null}
            {down ? <img src="/images/icons/arrow-down-green.svg" className="w-[14px] h-[14px]" /> : null}
        </div>
    )
}