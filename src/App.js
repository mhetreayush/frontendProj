import Sidebar from "./components/SideBar";
import OngoingProj from "./components/Pages/ongoingProj";
import UpcomingProj from "./components/Pages/upComingProj";
import CompletedProj from "./components/Pages/completedProj";
import ReqProj from "./components/Pages/requestProj";
function App() {
  return (
    <div className="flex">
      <div>
        <Sidebar /> {/* Leftmost Part */}
      </div>
      <div className="flex flex-col gap-y-3 p-3 items-center justify-start w-full"> {/* Middlemost Part */}
        <div> {/* Navbars */}

        </div>
        <div className="flex flex-col gap-y-6 p-3 items-center justify-start w-3/4">
          {/* <ReqProj /> */}
          {/* <CompletedProj /> */}
          {/* <OngoingProj /> */}
          <UpcomingProj />
        </div>
      </div>
    </div>
  );
}

export default App;
