import { Link } from 'react-router-dom';
const scrollUp=()=>{
    window.scrollTo(0,0)
}
const Sidebar = () => {
    const SidebarData = [
        "projects","employee","superadmin" //Team is to be added
]
const iconClass = "hidden md:block p-4 hover:bg-blue-300 hover:filter-invert rounded-md hover:bg-gray-400 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
       
return (

    
        <div className="h-fit md:w-fit drop-shadow border-t-2 md:border-r-2 border-r-gray-200 fixed bottom-0 z-50 w-full" aria-label="Sidebar">
    <div className="md:h-screen overflow-y-auto flex flex-row md:flex-col items-center justify-between md:py-10 px-3 bg-gray-150 rounded dark:bg-gray-800">
        <div className='hidden md:block text-lg p-3 border-4 rounded-md border-gray-400 bg-black'>
            <h1 className='font-extrabold text-white'>SAS</h1>
        </div>
        <div className='w-full'>
        <div className="md:space-y-10 w-full py-2 rounded-tr-md rounded-tl-md justify-between flex md:flex-col md:h-3/4 items-center">
        
    <div className='self-center'>
                <Link to="/" id="home" >
                    <button  className="self-center">

                <img className='p-4 hover:bg-blue-300 rounded-md hover:filter-invert' src={require(`./Icons/home.png`)} />
                    </button>
                </Link>
    </div>
    <div className='self-center'>
                <Link to="/Request" id="projects" >
                    <button  className="self-center">

                <img className='p-4 hover:bg-blue-300 rounded-md hover:filter-invert' src={require(`./Icons/projects.png`)} />
                    </button>
                </Link>
    </div>
    <div className='md:hidden text-lg p-3 rounded-md border-gray-400 bg-black'>
            <h1 className='font-extrabold text-white'>SAS</h1>
        </div>
    <div className='self-center'>
                <Link to="/employee" id="employee" >
                    <button  className="self-center">

                <img className='p-4 hover:bg-blue-300 rounded-md hover:filter-invert' src={require(`./Icons/employee.png`)} />
                    </button>
                </Link>
    </div>
    <div className='self-center'>
                <Link to="/superAdmin" id="superadmin" >
                    <button  className="self-center">

                <img className='p-4 hover:bg-blue-300 rounded-md hover:filter-invert' src={require(`./Icons/superadmin.png`)} />
                    </button>
                </Link>
    </div>
        </div>
    </div>
                <a href="#" className = {iconClass}>
                    <img src={require(`./Icons/logout.png`)} />
                </a>
    </div>
        </div>    
)
}

export default Sidebar