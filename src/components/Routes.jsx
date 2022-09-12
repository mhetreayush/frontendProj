import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuperAdmin from "./MainPages/SuperAdmin";
import Employee from "./MainPages/Employee";
import Admin from "./MainPages/Admin";
import ProjectsPage from "./ProjectPages/ProjectsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="frontendProj/projects" element={<ProjectsPage />} />
      <Route path="frontendProj/superadmin" element={<SuperAdmin />} />
      <Route path="frontendProj/employee" element={<Admin />} />
      <Route path="frontendProj/" element={<Employee />} />
    </Routes>
  );
};
export default AllRoutes;
