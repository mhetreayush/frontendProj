import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import allProjectPages from "../ProjectPages/AllProjectPages";
const Projects =() =>{
    return(
        <Routes>
        <Route path="/Request" element={<allProjectPages.ReqProj />} />
        <Route path="/Completed" element={<allProjectPages.CompletedProj />} />
        <Route path="/Ongoing" element={<allProjectPages.OngoingProj />} />
        <Route path="/Upcoming" element={<allProjectPages.UpcomingProj />} />
      </Routes>
    )
}
export default Projects;