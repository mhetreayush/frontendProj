import CardsData from "../CardsData"
import NavBar from "../Navbar";
import RecentUpdates from "../recentUpdates";

const ReqProj = () =>{
  function Card({ item }) {
    return (
      <div className="flex flex-col gap-y-5 w-full pt-3">
        <div className="bg-gray-150 py-4 px-6 flex flex-col gap-y-3 rounded-md">
          <div className="grid grid-cols-4 gap-4">
          <div className="flex gap-x-3 items-center">
                <img className="profilePicImg" src={require("../Profiles/Ayush.png")} />
                <h1>{item.profileName}</h1>
                </div>
            <h1 className="flex items-center gap-x-2">
              <img src={require(".././Icons/phone.png")} alt="" />
              {item.phone}
            </h1>
            <h1 className="flex items-center gap-x-2">
              <img src={require(".././Icons/email.png")} alt="" />
              {item.email}
            </h1>
          </div>
          <div className="flex w-full items-center justify-between">
              <div>
                  <h1 className="font-bold">Service Requested</h1>
                  <h3>{item.serviceReq}</h3>
              </div>
              
          </div>
          <div>
            <h1 className="font-bold">Description</h1>
            <h3 className="pr-16 font-extralight">{item.description}</h3>
          </div>
  
          <div className="flex w-full justify-between items-center pr-5">
            <div className="flex gap-x-3">
                <h1 className="font-bold">Select Employee</h1>
                <h3>DropDown comes here</h3>
              </div>
                <button className="px-6 py-2 bg-violetCustom rounded-md text-white font-bold">
                  Assign
                </button>
            </div>
          </div>
        </div>
    );
  }

  
const cardElements = CardsData.map( x => {
    return (<Card 
    key= {x.key}
    item={x}
        />
)})
return(
  <div className="grid grid-cols-9 gap-6">
  <div className="flex flex-col gap-y-5 col-span-6">
  <NavBar />
  {cardElements}
</div>
<div className="col-span-3">
  <RecentUpdates name="Manager 1"/>
</div>
</div>
)
}


export default ReqProj;