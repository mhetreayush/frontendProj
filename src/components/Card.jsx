export default function({item}){
    return(
        <div className="flex flex-col gap-y-3">
            <div className="bg-gray-200 p-4 flex flex-col gap-y-2">
                <div className="flex gap-x-2 justify-between">
                    <h1>{item.profileName}</h1>
                    <h1>{item.phone}</h1>
                    <h1>{item.email}</h1>
                </div>

            </div>

        </div>
    )
}