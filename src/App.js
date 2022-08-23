import Sidebar from "./components/SideBar";
import AllRoutes from "./components/Routes";

function App() {
  return (
    <div className="md:grid md:grid-cols-12 gap-4 mb-20">
      <div className="md:col-span-1 ">
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="md:col-span-11 flex flex-col gap-y-3 pb-3 px-3 justify-start w-full h-full">
        {/* Middlemost Part */}
        <div className="flex flex-col gap-y-6 pb-3 w-full justify-start">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
