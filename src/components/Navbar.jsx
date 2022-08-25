import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
const NavBar = () =>{
    const options1 = ["Request", "Completed"]
    const options2 = ["Ongoing" ,"Upcoming"]
    const optionArray1 = options1.map(x=>{
    const path = `/projects/${x}`
        return(
            <Link to={path} className=" hover:text-blue-600 focus:text-blue-600 focus:overline">
                    <h1 id={x} className="col-span-1 text-lg">{x}</h1>
                </Link>
        )
    })
    const optionArray2 = options2.map(x=>{
    const path = `/projects/${x}`
        return(
            <Link to={path} className=" hover:text-blue-600 focus:text-blue-600 focus:overline">
                    <h1 id={x} className="col-span-1 text-lg">{x}</h1>
                </Link>
        )
    })
    return(
    <div>
        <div className="flex flex-col gap-y-3 w-full pt-5 bg-white">
            <div className="flex justify-between px-3 w-full">
                <div className="flex gap-x-2 items-center font-extrabold text-2xl">
                    <a href="#">
                        <img src={require("./Icons/backArrow.png")}/>
                    </a>
                    <h1>Project</h1>
                </div>
                <div className="w-2/4">
                    <SearchBar />
                </div>
            </div>

            <div className="md:hidden border-b-2 grid grid-rows-2 gap-3 md:grid-cols-4 text-center pt-8 pb-2 items-center ">
                <div className='row-span-1 grid grid-cols-2'>
                    {optionArray1}
                </div>
                <div className='row-span-1 grid grid-cols-2'>
                    {optionArray2}
                </div>
            </div>
            <div className="hidden border-b-2 md:grid  md:grid-cols-4 text-center pt-8 pb-2 items-center ">
                    {optionArray1}
                    {optionArray2}
            </div>
        </div>
    </div>
    )
}

export default NavBar;