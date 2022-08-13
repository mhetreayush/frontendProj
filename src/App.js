import Sidebar from "./components/SideBar";
import NavBar from "./components/Navbar";
import RecentUpdates from "./components/recentUpdates";
import AllMainPages from "./components/ProjectPages/AllMainPages";
import EmployeeUpdates from "./components/employeeUpdates";
function App() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1">
        <Sidebar /> {/* Leftmost Part */}
      </div>
      <div className="col-span-11 md:col-span-8 flex flex-col gap-y-3 px-1 py-3 justify-start w-full"> {/* Middlemost Part */}
        {/* <div className="pt-6">
          <NavBar />
        </div>
        <div className="flex flex-col gap-y-6 py-3 items-center justify-start">
            <AllMainPages.Projects />
        </div> */}
        <AllMainPages.Employee />
      </div>
      <div className="col-span-11 md:col-span-3 pt-3 bg-gray-150">
        {/* <RecentUpdates />  */}
        <EmployeeUpdates />
      </div>
    </div>
  );
}

export default App;
