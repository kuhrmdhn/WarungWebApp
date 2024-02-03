function Form({ onSubmit, children }) {
    return (
        <form onSubmit={onSubmit} className="w-full h-screen fixed top-0 left-0 flex flex-col-reverse lg:flex-row py-3 justify-evenly items-center bg-white border-2">
            {children}
        </form>
    )
}

function Input({ inputName, type, value, onChange, placeholder }) {
    return <input className="h-8 w-full sm:h-10 lg:h-12 text-xs md:text-sm lg:text-base border-2 border-gray-600 rounded-md px-3 input-quantity" id={inputName} name={inputName} type={type} value={value} onChange={onChange} placeholder={placeholder} />
}

function Select({ onChange, value, name, selectName, optionData }) {
    return (
        <select className="h-8 w-full sm:h-10 lg:h-12 text-xs md:text-sm lg:text-base border-2 border-gray-600 rounded-md px-3" onChange={onChange} value={value} id={name} name={selectName}>
            {
                optionData.map((data) => (
                    <option key={data.id} value={data.value}>
                        {data.option}
                    </option>
                ))
            }
        </select>
    )
}


Form.Input = Input
Form.Select = Select
export default Form
