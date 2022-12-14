import CardsData from "../CardsData";
import NavBar from "../Navbar";
import RecentUpdates from "../recentUpdates";
import { faker } from "@faker-js/faker";
const starFilled = <img src={require(`../Icons/starFilled.png`)} />;
const starEmpty = <img src={require(`../Icons/starEmpty.png`)} />;
const CompletedProj = () => {
  let userRole = faker.company.bs();
  userRole = userRole[0][0].toUpperCase() + userRole.slice(1);
  function Card({ item }) {
    return (
      <div className="flex flex-col gap-y-5 w-full">
        <div className="bg-gray-150 my-3 py-4 px-6 flex flex-col gap-y-3 rounded-md">
          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="flex mt-10 md:mt-0 gap-x-3 items-center">
              <img
                className="profilePicImg"
                src={require("../Profiles/Ayush.png")}
              />
              <h1>{faker.name.fullName()}</h1>
            </div>
            <div>
              <div className="md:flex gap-x-10"></div>
              <h1 className="flex items-center gap-x-2">
                <img src={require(".././Icons/phone.png")} alt="" />
                {faker.phone.number()}
              </h1>
              <h1 className="flex items-center gap-x-2">
                <img src={require(".././Icons/email.png")} alt="" />
                {faker.internet.email()}
              </h1>
            </div>
            <div className="absolute top-[-3px] right-[5rem] md:right-3 px-4 flex items-center h-fit py-2 bg-green-300 rounded-md justify-self-end self-center">
              <h1 className="text-green-800 text-center">Completed</h1>
            </div>
          </div>
          <div className="md:flex w-full items-center justify-between mt-8">
            <div className="my-3 md:my-0">
              <h1 className="font-bold">Service Requested</h1>
              <h3>{userRole}</h3>
            </div>
            <div className="flex flex-col w-max md:items-end pr-5">
              <h1 className="font-bold">Project Date</h1>
              <div className="flex gap-x-1 items-center">
                <h3 className="font-bold text-gray-600">{item.projectStart}</h3>
                <h3 className="font-extrabold text-xl">-</h3>
                <h3 className="font-bold text-gray-600">{item.projectEnd}</h3>
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
          <div className="flex flex-col gap-y-1">
            <h1 className="font-bold">Rating</h1>
            <div className="flex gap-x-1">
              {starFilled}
              {starFilled}
              {starFilled}
              {starFilled}
              {starEmpty}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const cardElements = CardsData.map((x) => {
    return <Card key={x.key} item={x} />;
  });
  return(
    <div>
    {cardElements}
    </div>
    ) 
};

export default CompletedProj;
