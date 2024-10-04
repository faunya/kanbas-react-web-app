import { BiSearch } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentButtons() {
    return (
        <div id="assignment-page-btns" className="d-inline-flex text-nowrap float-end" style={{ width: "100%" }}>
            <div id="wd-search-assignment" className="input-group mb-3 ">
                <span className="input-group-text"><BiSearch /></span>
                <input type="text" className="form-control" placeholder="Search..."/>
            </div>

            <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end assign-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>

            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end assign-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
        </div>
    )
}