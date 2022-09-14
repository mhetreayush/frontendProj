import { useState} from "react"
import * as ReactDOM from 'react-dom';
import links from "./LinkData"
import ButtonLink from "./Link"
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
        <div className="bg-white/50 backdrop-blur sidebar flex md:h-screen w-screen justify-center items-center md:w-fit drop-shadow border-t-2 md:border-r-2 border-r-gray-200 fixed bottom-0 z-50" aria-label="SideBar">
    <div className="md:h-3/4 w-full bg-gray-150 md:w-fit rounded-md justify-evenly overflow-y-auto flex flex-row md:flex-col items-center  md:py-10 px-3 py-2 rounded">
            {squareElements}
        </div>
        </div>
    )
}
export default SideBar;