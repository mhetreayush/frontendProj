import { faker } from "@faker-js/faker";
import CardsData from "../CardsData"
import NavBar from "../Navbar";
import RecentUpdates from "../recentUpdates";

const UpcomingProj = () =>{
  let userRole = faker.company.bs();
  userRole = userRole[0][0].toUpperCase() + userRole.slice(1)
    function Card({ item }) {
        return (
          <div className="flex flex-col gap-y-5 w-full pt-3">
            <div className="bg-gray-150 py-4 px-6 flex flex-col gap-y-3 rounded-md">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex gap-x-3 col-span-2 items-center">
                <img className="profilePicImg" src={require("../Profiles/Ayush.png")} />
                <h1>{faker.name.fullName()}</h1>
                </div>
                <div className="col-span-2">

                <h1 className="flex items-center gap-x-2">
                  <img src={require(".././Icons/phone.png")} alt="" />
                  {faker.phone.number()}
                </h1>
                <h1 className="flex items-center gap-x-2">
                  <img src={require(".././Icons/email.png")} alt="" />
                  {faker.internet.email()}
                </h1>
                </div>
              </div>
              <div className="md:flex w-full items-center justify-between">
                  <div className="my-3 md:my-0">
                      <h1 className="font-bold">Service Requested</h1>
                      <h3>{userRole}</h3>
                  </div>
                  <div className="flex flex-col w-max md:items-end pr-5">
                      <h1 className="font-bold">Start Date</h1>
                      <div className="flex gap-x-1 items-center">
                      <h3 className="font-bold text-gray-600">{item.projectStart}</h3>
                          
                          
                      </div>
                  </div>
              </div>
              <div>
                <h1 className="font-bold">Description</h1>
                <h3 className="pr-16">{item.description}</h3>
              </div>
      
              <div className="flex w-full justify-between items-center pr-5">
                <div>
                    <h1 className="font-bold">Employee</h1>
                    <h3>Employee 1, Employee 2</h3>
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
      <div>
        {cardElements}
        </div>
    )
}

export default UpcomingProj;