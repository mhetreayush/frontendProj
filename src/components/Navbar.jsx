import SearchBar from "./SearchBar";
const Options =["Request", "Completed", "Ongoing", "Upcoming"]
const OptionArray = Options.map(x=>{
    return(
<a href="#" id={x} className="w-3/4">
                    <h1 className="col-span-1 text-lg">{x}</h1>
                </a>
    )
})
const NavBar = () =>{
    return(
    <div>
        <div className="flex flex-col gap-y-3 w-full">
            <div className="flex justify-between w-full">
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

            <div className="border-b-2 grid grid-cols-4 text-center pt-8 pb-2 items-center">
                {OptionArray}
            </div>
        </div>
    </div>
    )
}

export default NavBar;