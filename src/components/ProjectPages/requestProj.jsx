import CardsData from "../CardsData"
import NavBar from "../Navbar";
import RecentUpdates from "../recentUpdates";
import { faker } from "@faker-js/faker";
const ReqProj = () =>{
  let userRole = faker.company.bs();
  userRole = userRole[0][0].toUpperCase() + userRole.slice(1)
  function Card({ item }) {
    return (
      <div className="flex flex-col gap-y-5 w-full pt-3">
        <div className="bg-gray-150 py-4 px-6 flex flex-col gap-y-3 rounded-md">
          <div className="grid grid-rows-2 md:grid-cols-2 gap-4">
          <div className="flex row-span-1 gap-x-3 md:col-span-1 items-center">
                <img className="profilePicImg" src={require("../Profiles/Ayush.png")} />
                <h1>{faker.name.fullName()}</h1>
          </div>
<div className="md:col-span-1 md:grid grid-cols-2">
  
            <h1 className="flex items-center gap-x-2 md:col-span-1">
              <img src={require(".././Icons/phone.png")} alt="" />
              {faker.phone.number()}
            </h1>

            <h1 className="flex items-center gap-x-2 md:col-span-1">
              <img src={require(".././Icons/email.png")} alt="" />
              {faker.internet.email()}
            </h1>
          </div>
          </div>
          <div className="flex w-full items-center justify-between">
              <div>
                  <h1 className="font-bold">Service Requested</h1>
                  <h3>{userRole}</h3>
              </div>
              
</div>
          <div>
            <h1 className="font-bold">Description</h1>
            <h3 className="pr-16 font-extralight">{faker.lorem.lines(5)}</h3>
          </div>
  
          <div className="flex w-full flex-col md:flex-row justify-between items-center pr-5">
            <div className="flex gap-x-3">
                <h1 className="font-bold">Select Employee</h1>
                <h3>DropDown comes here</h3>
              </div>
              <div className="self-start mt-3 md:mt-0 md:self-end">

                <button className="px-6 py-2 bg-violetCustom rounded-md text-white font-bold">
                  Assign
                </button>
              </div>
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
  <div className="md:grid grid-cols-9 gap-6">
  <div className="flex flex-col gap-y-5 col-span-6">
  <NavBar />
  {cardElements}
</div>
<div className="hidden md:flex md:col-span-3">
  <RecentUpdates name="Manager 1"/>
</div>
</div>
)
}


export default ReqProj;