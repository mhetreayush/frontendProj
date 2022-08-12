import Sidebar from "./components/SideBar";
import OngoingProj from "./components/Pages/ongoingProj";
import UpcomingProj from "./components/Pages/upComingProj";
import CompletedProj from "./components/Pages/completedProj";
import ReqProj from "./components/Pages/requestProj";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecentUpdates from "./components/recentUpdates";
function App() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1">
        <Sidebar /> {/* Leftmost Part */}
      </div>
      <div className="col-span-11 md:col-span-8 flex flex-col gap-y-3 px-1 py-3 justify-start w-full"> {/* Middlemost Part */}
        <div className="pt-6"> {/* Navbars */}
          <NavBar />
        </div>
        <div className="flex flex-col gap-y-6 py-3 items-center justify-start">
        <Routes>
        <Route path="/" element={<ReqProj />} />
        <Route path="/Completed" element={<CompletedProj />} />
        <Route path="/Ongoing" element={<OngoingProj />} />
        <Route path="/Upcoming" element={<UpcomingProj />} />
      </Routes>
          {/* <UpcomingProj /> */}
        </div>
      </div>
      <div className="col-span-11 md:col-span-3 pt-3 bg-gray-150">
        <RecentUpdates /> {/* Rightmost Part */}
      </div>
    </div>
  );
}

export default App;
