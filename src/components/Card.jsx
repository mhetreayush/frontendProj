export default function Cards({ item }) {
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="bg-gray-200 py-4 px-6 flex flex-col gap-y-3 rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          {/* <img src={require(`./Profiles/${item.profileName}.png`)} /> */}
          <h1>{item.profileName}</h1>
          <h1 className="flex items-center gap-x-2">
            <img src={require("./Icons/phone.png")} alt="" />
            {item.phone}
          </h1>
          <h1 className="flex items-center gap-x-2">
            <img src={require("./Icons/email.png")} alt="" />
            {item.email}
          </h1>
        </div>
        <div className="flex w-full items-center justify-between">
            <div>
                <h1 className="font-bold">Service Requested</h1>
                <h3>{item.serviceReq}</h3>
            </div>
            <div className="flex flex-col gap-y-3 w-max items-end">
                <h1 className="font-bold">Project Date</h1>
                <div className="flex gap-x-1 items-center">
                <h3 className="font-bold text-gray-600">{item.projectStart}</h3>
                <h3 className="font-extrabold text-xl">-</h3>
                <h3 className="font-bold text-red-600">{item.projectEnd}</h3>
                    
                    
                </div>
            </div>
        </div>
        <div>
          <h1 className="font-bold">Description</h1>
          <h3 className="pr-16">{item.description}</h3>
        </div>

        <div className="flex gap-x-3 items-center">
          <h1 className="font-bold">Progress</h1>

          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-green-400 h-2.5 rounded-full"
              style={{ width: `${item.progressWidth}` }}
            ></div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center pr-5">
          <div className="flex flex-col gap-y-3">
              <h1 className="font-bold">Employee</h1>
              <h3>Employee 1, Employee 2</h3>
            </div>
              <button className="px-6 py-2 bg-violetCustom rounded-md text-white font-bold">
                Chat
              </button>
          </div>
        </div>
      </div>
  );
}
