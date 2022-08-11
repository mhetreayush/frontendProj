export default function Cards({item}){
    return(
        <div className="flex flex-col gap-y-3 w-full rounded">
            <div className="bg-gray-200 p-4 flex flex-col gap-y-2">
                <div className="flex gap-x-2 justify-between">
                    {/* <img src={require(`./Profiles/${item.profileName}.png`)} /> */}
                    <h1>{item.profileName}</h1>
                    <h1>{item.phone}</h1>
                    <h1>{item.email}</h1>
                </div>
                <div>
                    <h1 className="font-bold">Service Requested</h1>
                    <h3>{item.serviceReq}</h3>
                </div>
                <div>
                    <h1 className="font-bold">Description</h1>
                    <h3 className="pr-16">{item.description}</h3>
                </div>

                <div className="flex gap-x-3 items-center">
                <h1 className="font-bold">Progress</h1>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${item.progressWidth}`}}></div>
                    </div>

                </div>

            </div>

        </div>
    )
}