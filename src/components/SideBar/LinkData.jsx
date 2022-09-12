import Admin from "../MainPages/Admin";
import Employee from "../MainPages/Employee";
import SuperAdmin from "../MainPages/SuperAdmin";
import AllPages from "../ProjectPages/ProjectsPage";

export default [
        {
            linkName:"Home",
            id: "home",
            on: true,
            component: <Employee />,
        },   
        {
            linkName:"Projects",
            id: "projects",
            on: false,
            component: <AllPages />,
        },
        {
            linkName:"Employee",
            id: "employee",
            on: false,
            component: <Admin />,
        },   
        {
            linkName:"Superadmin",
            id: "superadmin",
            on: false,
            component: <SuperAdmin />,
        }
]