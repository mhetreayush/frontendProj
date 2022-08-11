import Sidebar from "./components/SideBar";
import Card from "./components/Card";
import CardsData from "./components/CardsData";
function App() {
  const cardElements = CardsData.map( x => {
    return (<Card 
    key= {x.key}
    item={x}
        />
)})
  return (
    <div className="flex">
      <div>
        <Sidebar /> {/* //Leftmost Part */}
      </div>
      <div className="flex flex-col gap-y-3 p-3 items-center justify-start w-full"> {/* Middlemost Part */}
        <div> {/* //Navbars */}

        </div>
        <div className="flex flex-col gap-y-3 p-3 items-center justify-start w-3/4">
          {cardElements} {/* //Cards */}
        </div>
      </div>
    </div>
  );
}

export default App;
