import { faker } from "@faker-js/faker";
import CardsData from "../CardsData";
import NavBar from "../Navbar";
import RecentUpdates from "../recentUpdates";
const OngoingProj = () => {
  let userRole = faker.company.bs();
  userRole = userRole[0][0].toUpperCase() + userRole.slice(1);
  function Card({ item }) {
    const userName = faker.name.fullName();
    return (
      <div className="flex flex-col gap-y-5 w-full pt-3">
        <div className="bg-gray-150 py-4 px-6 flex flex-col gap-y-3 rounded-md">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex gap-x-3 items-center col-span-2">
              <img
                className="profilePicImg"
                src={require("../Profiles/Ayush.png")}
              />
              <h1>{userName}</h1>
            </div>
            <div className="col-span-2">
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
          </div>
          <div className="md:flex w-full items-center justify-between">
            <div className="my-3 md:my-0">
              <h1 className="font-bold">Service Requested</h1>
              <h3>{userRole}</h3>
            </div>
            <div className="flex flex-col w-max md:items-end pr-5">
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

            <div className="w-full bg-none rounded-md h-2.5 bg-gray-200">
              <div
                className="bg-green-400 h-2.5 rounded-md"
                style={{ width: `${item.progressWidth}` }}
              ></div>
            </div>
          </div>

          <div className="md:flex w-full justify-between items-center pr-5">
            <div className="my-3 md:my-0">
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

  const cardElements = CardsData.map((x) => {
    return <Card key={x.key} item={x} />;
  });
  return <div className="flex flex-col gap-y-5 col-span-6">{cardElements}</div>;
};

export default OngoingProj;
