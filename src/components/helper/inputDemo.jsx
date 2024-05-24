
export default function InputDemo({
    label,
    placeHolder,
    value,
    onChange,
    id,
    type = "text",
    error
}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            {
                label && <label htmlFor={id}>{label}</label>
            }
            <div className="w-full">
                <input
                    type={type}
                    placeholder={placeHolder}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary_Color focus:border-transparent transition duration-300 ease-in-out hover:border-gray-400 my-0 ${error ? "border-red-500 hover:border-red-500" : "border-gray-300"}`}
                />
                {
                    error && <p className="text-red-500 my-0 p-2 text-[12px]">{error}</p>
                }
            </div>
        </div>
    )
}
