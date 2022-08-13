import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReqProj from "./ProjectPages/requestProj";
import CompletedProj from "./ProjectPages/completedProj";
import OngoingProj from "./ProjectPages/ongoingProj";
import UpcomingProj from "./ProjectPages/upcomingProj";
import ProjectsPage from "./ProjectPages/ProjectsPage";
import SuperAdmin from "./MainPages/SuperAdmin";
import Employee from "./MainPages/Employee";

const AllRoutes = () => {
        return(

                <Routes>
                        <Route path="/Request" element={<ReqProj />} />
                        <Route path="/Completed" element={<CompletedProj />} />
                        <Route path="/Ongoing" element={<OngoingProj />} />
                        <Route path="/Upcoming" element={<UpcomingProj />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/superadmin" element={<SuperAdmin userName="Jeffrey Richard" />} />
                        <Route path="/employee" element={<SuperAdmin userName="Manager 1" />} />
                        <Route path="/home" element={<Employee />} />
                </Routes>
                )
}
export default AllRoutes;