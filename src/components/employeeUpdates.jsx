const EmployeeUpdates = () =>{
    return(
        <div>
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
                <p>
                esse magna dolore luptatum consequat, amet, vel nisl molestie hendrerit nulla laoreet et feugait aliquam
                </p>
                <p>
                ex Duis velit feugiat ut nibh ullamcorper in laoreet consequat. dignissim nulla Lorem ad esse
                </p>
                <p>ut lobortis hendrerit consequat, quis at dolore minim</p>
                <p>
                esse magna dolore luptatum consequat, amet, vel nisl molestie hendrerit nulla laoreet et feugait aliquam
                </p>
                <a className="underline decoration-dotted text-xs text-blue-600">See all</a>
            </div>
        </div>
        </div>
    )
}

export default EmployeeUpdates;