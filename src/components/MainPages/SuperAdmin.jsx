import Graph from "../Graph"
import RecentUpdates from "../recentUpdates"
import {faker} from "@faker-js/faker"
import AllPages from "../ProjectPages/ProjectsPage"
const cardProps = [{
    text:"Tasks in Progress",
    number:125,
    color: "#ECEDF7",
    textColor: "#3F4AAF"
},
{
    text:"Tasks Completed",
    number:210,
    color: "#E6F7F1",
    textColor: "#07AB70"
},
{
    text:"Overdue Tasks",
    number:5,
    color:"#FFE6E6",
    textColor: "#FF0000"
}]

const userProps=[
    {
        userName: "Rahul Thakar",
        userRole: "IT service",
        daysLeft: 2,
        textColor: "#FF0000",
        color:"#FFE6E6"
    },
    {
        userName: "Anirrudha Sharma",
        userRole: "Web service",
        daysLeft: 3,
        textColor: "#FF0000",
        color:"#FFE6E6"
    },
    {
        userName: "Disha Jain",
        userRole: "Cyber service",
        daysLeft: 7,
        textColor: "#07AB70",
        color:"#E6F7F1"
    }
]

const cardArray = cardProps.map(x=>{
    return(
        <div className="w-full px-5 pt-3 my-5 md:my-0 pb-5 col-span-1 rounded-md flex flex-col gap-y-3" style={{backgroundColor: `${x.color}`}}>
                    <h1 className="text-xl font-bold text-gray-800">{x.text}</h1>
                    <h1 className="text-[3rem] font-extrabold" style={{color: `${x.textColor}`}}>{x.number}</h1>
                </div>
)})

const userArray = userProps.map(x=>{
    return(
        <div className="grid grid-cols-6 w-full gap-3 items-center px-2 py-4 rounded-md" style={{backgroundColor: `${x.color}`}}>
            <img className="col-span-1" src={require("../Profiles/Ayush.png")}/>
            <div className="col-span-3">
                <h1 className="font-bold text-black tracking-wide">{faker.name.fullName()}</h1>
                <h1 className="text-sx text-gray-800">{x.userRole}</h1>
            </div>
            <h1 className="col-span-2" style={{color: `${x.textColor}`}}>{x.daysLeft} days left</h1>
        </div>
    )
})

const taskStatus =[
    {
        userName: "Service 1",
        numberOfTasks:2,
        completedTasks: 30,
    },
    {
        userName: "Service 2",
        numberOfTasks:5,
        completedTasks: 27,
    },
    {
        userName: "Service 3",
        numberOfTasks:1,
        completedTasks: 17,
    },
    {
        userName: "Service 4",
        numberOfTasks:3,
        completedTasks: 19,
    },
]

const taskArray = taskStatus.map(x=>{
    return(
        <div className="grid grid-cols-3 w-full even:bg-gray-150 drop-shadow border-black odd:bg-white py-3 px-6 text-center rounded-md bg-[#F2F2F9]">
                <h1 className="col-span-1">{x.userName}</h1>
                <h1 className="col-span-1">{x.numberOfTasks}</h1>
                <h1 className="col-span-1">{x.numberOfTasks}</h1>
            </div>
    )
})
function SuperAdmin(){
    const superAdminName = faker.name.fullName();
    return(
        <div>
        <div className="flex flex-col gap-y-10 pt-7 col-span-9 md:col-span-6">
            <h1 className="text-2xl font-extrabold">Welcome back, <span className="text-blue-800">{superAdminName}</span></h1>
            <div className="md:grid grid-cols-3 gap-5">
                {cardArray}
            </div>
            <div>
            <div className="md:grid grid-cols-10 gap-2">
                <div className="col-span-4 mt-5">
                    <h3 className="mb-3 ml-1 text-sm font-bold">Projects close to deadline</h3>
                    <div className="col-span-4 flex flex-col gap-y-3">
                        {userArray}
                    </div>
                </div>
                <div className="col-span-6">
                <h3 className="mb-3 ml-1 mt-5 text-sm font-bold">Task created vs Task completed</h3>
                    <div className="col-span-6 rounded-md">
                        <div className="bg-[#F2F3FA] h-full rounded-md"> {/* For Graph */}
                            <Graph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="mt-5">
            <h3 className="mb-3 ml-1 text-sm font-bold">Employees Progress</h3>
            <div className="items-center grid grid-cols-3 w-full py-3 px-6 text-center rounded-md font-bold bg-[#D9DBEF]">
                <h1 className="col-span-1">Service</h1>
                <h1 className="col-span-1">Ongoing Task</h1>
                <h1 className="col-span-1">Completed Task</h1>
            </div>

            <div className="flex flex-col gap-y-2 w-full mt-5">
                {taskArray}
            </div>
            </div>
        </div>
        </div>
    )
}

export default SuperAdmin;