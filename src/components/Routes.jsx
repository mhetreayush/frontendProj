import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReqProj from "./ProjectPages/requestProj";
import CompletedProj from "./ProjectPages/completedProj";
import OngoingProj from "./ProjectPages/ongoingProj";
import UpcomingProj from "./ProjectPages/upcomingProj";
import SuperAdmin from "./MainPages/SuperAdmin";
import Employee from "./MainPages/Employee";
import Admin from "./MainPages/Admin";

const AllRoutes = () => {
        return(
                <Routes>
                        <Route path="frontendProj/projects/Request" element={<ReqProj />} />
                        <Route path="frontendProj/projects/Completed" element={<CompletedProj />} />
                        <Route path="frontendProj/projects/Ongoing" element={<OngoingProj />} />
                        <Route path="frontendProj/projects/Upcoming" element={<UpcomingProj />} />
                        <Route path="frontendProj/superadmin" element={<SuperAdmin />} />
                        <Route path="frontendProj/employee" element={<Admin />} />
                        <Route path="frontendProj/" element={<Employee />} />
                </Routes>
                )
}
export default AllRoutes;