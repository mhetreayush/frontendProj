const Sidebar = () => {
    const SidebarData = [
        "home","team","chart","people","help"
]
const iconClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
// const svgClass = "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
const iconArray = SidebarData.map(x => {
    return (
    <li>
                <a href="#" className = {iconClass}>
                <img src={require(`./Icons/${x}.png`)} />
                </a>
    </li>
    )
})        
return (    
    <aside className="w-fit drop-shadow-lg border-r-2 border-r-gray-200" aria-label="Sidebar">
    <div className="overflow-y-auto flex flex-col justify-between py-10 px-6 h-screen bg-gray-150 rounded dark:bg-gray-800">
        <div>
        <ul className="space-y-10 flex flex-col h-3/4 justify-between items-center">
            {iconArray}
        </ul>
    </div>
                <a href="#" className = {iconClass}>
                <img src={require(`./Icons/logout.png`)} />
                </a>
    </div>
    </aside>
)
}

export default Sidebar