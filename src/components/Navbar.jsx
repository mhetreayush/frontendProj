import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
const NavBar = () =>{
    const options = ["Request", "Completed", "Ongoing" ,"Upcoming"]
    const optionArray = options.map(x=>{
    const path = `/${x}`
        return(
            <Link to={path} className="w-3/4 hover:text-blue-600 focus:text-blue-600 focus:overline">
                    <h1 id={x} className="col-span-1 text-lg">{x}</h1>
                </Link>
        )
    })
    return(
    <div>
        <div className="flex flex-col gap-y-3 w-full pt-5">
            <div className="flex flex-col md:flex-row gap-y-3 md:justify-between w-full">
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

            <div className="border-b-2 grid grid-cols-4 text-center pt-8 pb-2 items-center ">
                {optionArray}
            </div>
        </div>
    </div>
    )
}

export default NavBar;