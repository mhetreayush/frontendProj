import AllRoutes from "./components/Routes";
import RecentUpdates from "./components/recentUpdates";
import Employee from "./components/MainPages/Employee";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div className="md:grid md:grid-cols-12 gap-4 mb-20">
      <div className="md:col-span-1 ">
        <div>
          <SideBar />
        </div>
      </div>
      <div className="md:col-span-8 flex flex-col gap-y-3 pb-3 px-3 justify-start w-full h-full" id="middleMostPart">
        <Employee />
        {/* Middlemost Part */}
        <div className="flex flex-col gap-y-6 pb-3 w-full justify-start">
          <AllRoutes /> 
        </div>
      </div>
      <div className="md:col-span-3">
        <RecentUpdates />
      </div>
    </div>
  );
}

export default App;
