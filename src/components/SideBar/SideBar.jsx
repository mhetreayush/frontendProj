import { useState} from "react"
import * as ReactDOM from 'react-dom';
import links from "./LinkData"
import ButtonLink from "./Link"
import OngoingProj from "../ProjectPages/ongoingProj";
import CompletedProj from "../ProjectPages/completedProj";
import UpcomingProj from "../ProjectPages/upcomingProj";
import ReqProj from "../ProjectPages/requestProj";
const SideBar =() => {
    const [squares, setSquares] = useState(links)
    
    function toggle(id, component) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                ReactDOM.render(component, document.getElementById("middleMostPart"))
                return(
                    square.id === id ? {...square, on: true} : {...square, on: false}
                )
            })
        })
    }   
    const squareElements = squares.map(square => (
        <ButtonLink 
            linkName={square.linkName} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
            component={square.component}
            imagePath={square.imagePath}
            linkPath={square.linkPath}
        />
    ))
    return (
        <div className="sidebar h-fit md:w-fit drop-shadow border-t-2 md:border-r-2 border-r-gray-200 fixed bottom-0 z-50 w-screen" aria-label="SideBar">
    <div className="md:h-screen overflow-y-auto flex flex-row md:flex-col items-center justify-between md:py-10 px-3 bg-gray-150 py-2 rounded dark:bg-gray-800">
        {/* <ul className="flex gap-x-3 w-full justify-between"> */}
            {squareElements}
        {/* </ul> */}
        </div>
        </div>
    )
}
export default SideBar;