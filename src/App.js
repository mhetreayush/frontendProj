import Sidebar from "./components/SideBar";
import OngoingProj from "./components/Pages/ongoingProj";
import UpcomingProj from "./components/Pages/upComingProj";
import CompletedProj from "./components/Pages/completedProj";
import ReqProj from "./components/Pages/requestProj";
import NavBar from "./components/Navbar";
function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar /> {/* Leftmost Part */}
      </div>
      <div className="col-span-8 flex flex-col gap-y-3 px-1 py-3 justify-start w-full"> {/* Middlemost Part */}
        <div className="w-full px-3 pt-6"> {/* Navbars */}
          <NavBar />
        </div>
        <div className="flex flex-col gap-y-6 p-3 items-center justify-start w-full">
          {/* <ReqProj /> */}
          {/* <CompletedProj /> */}
          {/* <OngoingProj /> */}
          <UpcomingProj />
        </div>
      </div>
      <div className="col-span-3">

      </div>
    </div>
  );
}

export default App;
