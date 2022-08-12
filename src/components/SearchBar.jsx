const SearchBar = () =>{
return(
<form className="flex items-center drop-shadow-lg">   
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="#3F4AAF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-150 border  border-gray-300 text-gray-900 text-sm rounded-md block w-full pl-2" placeholder="SEARCH" required="" />
    </div>
</form>
)
}

export default SearchBar;