const cardProps = [{
    text:"Tasks in Progress",
    number:20,
    color: "#ECEDF7",
    textColor: "#3F4AAF"
},
{
    text:"Tasks Completed",
    number:95,
    color: "#E6F7F1",
    textColor: "#07AB70"
},
]

const userProps=[
    {
        userName: "Rahul Thakar",
        userRole: "IT service",
        daysLeft: 2,
        textColor: "#37B20B",
        color:"#F2F3FA"
    },
    {
        userName: "Anirrudha Sharma",
        userRole: "Web service",
        daysLeft: 3,
        textColor: "#37B20B",
        color:"#F2F3FA"
    },
    
]

const cardArray = cardProps.map(x=>{
    return(
        <div className="w-full px-5 pt-3 pb-5 col-span-1 rounded-md flex flex-col gap-y-3" style={{backgroundColor: `${x.color}`}}>
                    <h1 className="text-xl font-bold text-gray-800">{x.text}</h1>
                    <h1 className="text-[3rem] font-extrabold" style={{color: `${x.textColor}`}}>{x.number}</h1>
                </div>
)})

const userArray = userProps.map(x=>{
    return(
        <div className="grid grid-cols-6 w-full gap-3 items-center px-2 py-4 rounded-md bg-[#ECEDF7]">
            <img className="col-span-1" src={require("../Profiles/Ayush.png")}/>
            <div className="col-span-3">
                <h1 className="font-bold text-black">{x.userName}</h1>
                <h1 className="text-sx text-gray-800">{x.userRole}</h1>
            </div>
            <div className="col-span-2 text-center">
            <h3>Start</h3>
            <h1 className="text-[#37B20B] font-extrabold">{x.daysLeft} days left</h1>
            </div>
        </div>
    )
})

const taskStatus =[
    {
        userName: "Name 1",
        numberOfTasks:2,
        completedTasks: 30,
    },
    {
        userName: "Name 2",
        numberOfTasks:5,
        completedTasks: 27,
    },
    {
        userName: "Name 3",
        numberOfTasks:1,
        completedTasks: 17,
    },
    {
        userName: "Name 4",
        numberOfTasks:3,
        completedTasks: 19,
    },
]

const taskArray = taskStatus.map(x=>{
    return(
        <div className="grid grid-cols-3 w-full py-3 px-6 text-center rounded-md bg-[#F2F2F9]">
                <h1 className="col-span-1">{x.userName}</h1>
                <h1 className="col-span-1">{x.numberOfTasks}</h1>
                <h1 className="col-span-1">{x.completedTasks}</h1>
            </div>
    )
})
function Employee(){
    return(
        <div className="flex flex-col gap-y-3 pt-7">
            <h1 className="text-2xl font-extrabold">Welcome back, <span className="text-blue-800">Employee 1</span></h1>
            <div className="grid grid-cols-10 gap-3">

                <div className="flex flex-col w-full col-span-4 gap-5">
                    {cardArray}
                </div>
                <div className="col-span-6">
                        <div className="bg-[#F2F3FA] h-full rounded-md"> {/* For Graph */}
                            Graph will come here
                        </div>
                </div>
            </div>
            <div>
                <h3 className="mb-3 ml-1 text-sm font-bold">Ongoing Project</h3>
                <div className="grid grid-cols-10 w-full gap-4  px-4 py-3 rounded-md bg-[#ECEDF7]">
                <div className="col-span-1 flex flex-col">
                    <h3 className="text-xs">Name</h3>
                    <h1>Service A</h1>
                </div>
                <div className="col-span-5 flex flex-col">
                    <h3 className="text-xs">Description</h3>
                    <h1>Lorem ipsum dolor sit amet, consectetue.....</h1>
                </div>
                <div className="col-span-1 flex flex-col">
                    <h3 className="text-xs">Days left</h3>
                    <h1 className="text-red-600 font-bold">2 Days</h1>
                </div>
                <div className="col-span-2 flex flex-col">
                    <h3 className="text-xs">Progress</h3>
                    <h1>Under Work</h1>
                </div>
                <div className="col-span-1 flex flex-col self-center">
                    <a href="#">
                        <img className="h-fit w-fit" src={require("../Icons/nextArrowButton.png")}/>
                    </a>
                </div>
                
            </div>
        </div>
            <div>
            <div className="grid grid-cols-10 gap-20">
                <div className="col-span-4">
                <h3 className="mb-3 ml-1 text-sm font-bold">Upcoming Projects</h3>
                    <div className="col-span-4 flex flex-col gap-y-3">
                        {userArray}
                    </div>
                    <a className="underline decoration-dotted text-xs text-blue-600 self-end w-full">See all</a>
                </div>
                <div className="col-span-6">
                <h3 className="mb-3 ml-1 text-sm font-bold">Assigned Tasks And Projects</h3>
                    <div className="col-span-4 flex flex-col gap-y-3">
                    <div>
                <div className="grid grid-cols-5 w-full gap-4  px-4 py-5 rounded-md bg-[#FFEDE5]">
                <div className="col-span-1 flex flex-col">
                    <h3 className="text-xs">Task</h3>
                    <h1 className="font-bold">Quiz</h1>
                </div>
                <div className="col-span-3 flex flex-col">
                    <h3 className="text-xs">Description</h3>
                    <h1>Lorem ipsum dolor sit amet.....</h1>
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

        <div>
                <div className="grid grid-cols-5 w-full gap-4  px-4 py-5 rounded-md bg-[#F8EBFF]">
                <div className="col-span-1 flex flex-col">
                    <h3 className="text-xs">Task</h3>
                    <h1 className="font-bold">Project</h1>
                </div>
                <div className="col-span-3 flex flex-col">
                    <h3 className="text-xs">Description</h3>
                    <h1>Lorem ipsum dolor sit amet.....</h1>
                </div>
                <div className="col-span-1 flex flex-col">
                <button  className="bg-[#3F4AAF] rounded-md w-full px-4 py-2 text-center self-center text-white">
                        <a>
                            Visit  
                        </a>
                    </button>
                </div>
                
            </div>
        <a className="underline decoration-dotted text-xs text-blue-600 self-end w-full">See all</a>
        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Employee;