import Employee from "./Employee";
import EmployeeUpdates from "../employeeUpdates";

const EmployeePage =() =>{
    return(
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-9">
                <Employee />
            </div>
            <div className="col-span-3">
                <EmployeeUpdates />
            </div>
        </div>
    )
}

export default EmployeePage