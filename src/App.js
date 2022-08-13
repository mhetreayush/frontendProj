import Sidebar from "./components/SideBar";
import AllMainPages from "./components/ProjectPages/AllMainPages";
import AllProjectPages from "./components/ProjectPages/AllProjectPages";
import AllRoutes from "./components/Routes";
function App() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-1">
        <div>
        <Sidebar /> {/* Leftmost Part */}
        </div>

      </div>
      <div className="col-span-11 flex flex-col gap-y-3 pb-3 justify-start w-full h-full"> {/* Middlemost Part */}
        
        <div className="flex flex-col gap-y-6 pb-3 w-full justify-start">
            {/* <AllProjectPages /> */}
            {/* <AllMainPages.EmployeePage /> */}
            <AllRoutes />
        </div>
        
      </div>
    </div>
  );
}

export default App;
