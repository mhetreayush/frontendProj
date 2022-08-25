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
                        <Route path="/projects/Request" element={<ReqProj />} />
                        <Route path="/projects/Completed" element={<CompletedProj />} />
                        <Route path="/projects/Ongoing" element={<OngoingProj />} />
                        <Route path="/projects/Upcoming" element={<UpcomingProj />} />
                        <Route path="/superadmin" element={<SuperAdmin />} />
                        <Route path="/employee" element={<Admin />} />
                        <Route path="/" element={<Employee />} />
                </Routes>
                )
}
export default AllRoutes;