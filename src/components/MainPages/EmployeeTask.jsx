const EmployeeTask = (props) => {
    const cardClass = `grid grid-cols-5 w-full gap-4  px-4 py-5 rounded-md bg-[${props.bgColor}]`
    return(
        <div>
                <div className={cardClass}>
                <div className="col-span-1 flex flex-col">
                    <h3 className="text-xs">Task</h3>
                    <h1 className="font-bold">{props.name}</h1>
                </div>
                <div className="col-span-3 flex flex-col">
                    <h3 className="text-xs">Description</h3>
                    <h1>{props.description}</h1>
                </div>
                <div className="col-span-1 flex flex-col">
                    <button  className="bg-[#3F4AAF] rounded-md w-full px-4 py-2 text-center self-center text-white">
                        <a>
                            Visit  
                        </a>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default EmployeeTask