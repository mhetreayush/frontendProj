import ProjectsPage from "./ProjectsPage";
import RecentUpdates from "../recentUpdates";
const AllProjectPages = () =>{
    return(
        <div className="grid grid-cols-12 gap-3 h-full">
            <div className="col-span-9 pt-6">
                <ProjectsPage />
            </div>
            <div className="col-span-3">
                <RecentUpdates name="Manager 1"/>
            </div>
        </div>
    )
}

export default AllProjectPages;
