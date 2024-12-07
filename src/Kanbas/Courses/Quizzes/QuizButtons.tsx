import { Dropdown } from "bootstrap";
import { BiSearch } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function QuizButtons() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();

    return (
        <div id="assignment-page-btns" className="d-inline-flex text-nowrap float-end" style={{ width: "100%" }}>
            <div id="wd-search-assignment" className="input-group mb-3 ">
                <span className="input-group-text"><BiSearch /></span>
                <input type="text" className="form-control" placeholder="Search..." />
            </div>


            {
                (currentUser.role === 'FACULTY') &&
                <a id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end assign-btn"
                    href={"#" + pathname + "/edit/new"}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Quiz
                </a>
            }

            {
                (currentUser.role === 'FACULTY') &&

                <div className="dropdown">
                    <button id="wd-quiz-menu-dropdown" className="btn btn-lg btn-secondary me-1 float-end assign-btn dropdown-toggle"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item"><a href="#"></a></li>
                    </ul>
                </div>
            }



        </div>
    )
}