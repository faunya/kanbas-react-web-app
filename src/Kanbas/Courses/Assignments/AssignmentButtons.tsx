import { FaPlus } from "react-icons/fa6";

export default function AssignmentButtons() {
    return (
        <div id="assignment-page-btns" className="text-nowrap float-end">
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
            <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            
            <input id="wd-search-assignment"
                placeholder="Search for Assignments" />
        </div>
    )
}