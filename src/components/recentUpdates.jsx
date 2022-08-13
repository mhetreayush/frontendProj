const RecentUpdates = (props) =>{
    return(
        <div className="fixed px-6 pt-4 h-full text-sm bg-gray-150">
            <div className="w-full flex flex-col gap-y-3">
                <div className="flex w-full justify-between items-center">
                    <div className="flex gap-x-2 items-center">
                    <img src={require("./Icons/notifications.png")} />
                    <img src={require("./Icons/bell.png")} />
                    </div>
                    <img className="profilePicImg" src={require("./Profiles/Ayush.png")} />
                </div>
                <h1 className="font-bold text-base">Recent Updates</h1>
                <p>Service Request from <span className="text-blue-600">Rahul Thakar</span> Assign now</p>
                <button className="px-4 py-2 bg-violetCustom rounded-md text-white font-bold w-fit">
                  Assign
                </button>
                <p>
                esse magna dolore luptatum consequat, amet, vel nisl molestie hendrerit nulla laoreet et feugait aliquam
                </p>
                <p>
                ex Duis velit feugiat ut nibh ullamcorper in laoreet consequat. dignissim nulla Lorem ad esse
                </p>
                <p>ut lobortis hendrerit consequat, quis at dolore minim</p>
                <a className="underline decoration-dotted text-xs text-blue-600">See all</a>
                <hr />
                <h1 className="font-bold text-base">Post</h1>
                <div className="bg-white rounded-md flex flex-col gap-y-6 px-4 py-5 mt-2">
                    <div className="flex gap-x-2 items-center">
                    <img src={require("./Profiles/Ayush.png")} />
                    <h1 className="font-bold text-base">{props.name}</h1>
                    </div>
                    
                    <form>
    <label for="chat" className="sr-only">Create Post</label>
    <div className="flex items-center py-2 px-1 bg-gray-50 rounded-lg dark:bg-gray-700">
        <textarea style={{resize: "none"}} id="chat" rows="1" className="block mx-2 rounded-md p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create Post"></textarea>
        <button type="button" className="inline-flex justify-center p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Upload image</span>
        </button>
        <button type="button" className="p-1 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Add emoji</span>
            <span className="sr-only">Send message</span>
        </button>
    </div>
</form>

                    <button className="px-4 py-2 bg-violetCustom rounded-md text-white font-bold w-full">
                  Post
                </button>
                </div>
            </div>
        </div>
    )
}

export default RecentUpdates;