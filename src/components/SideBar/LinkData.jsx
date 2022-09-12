import CompletedProj from "../ProjectPages/completedProj";
import OngoingProj from "../ProjectPages/ongoingProj";
import ReqProj from "../ProjectPages/requestProj";
import UpcomingProj from "../ProjectPages/upcomingProj";

export default [
        {
            linkName:"Request",
            id: "request",
            on: true,
            component: <ReqProj />
        },   
        {
            linkName:"Completed",
            id: "completed",
            on: false,
            component: <CompletedProj />
        },
        {
            linkName:"Ongoing",
            id: "ongoing",
            on: false,
            component: <OngoingProj />
        },   
        {
            linkName:"Upcoming",
            id: "upcoming",
            on: false,
            component: <UpcomingProj />
        }  
]