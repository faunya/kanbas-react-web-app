import { BsGripVertical } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentButtons /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                    <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <ModuleControlButtons />
                        <span className="float-end rounded-border grey-border" style={{ marginRight: "10px" }}>40% of Total </span> <button>+</button>
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />

                            <span style={{ display: "inline-block" }}>
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1 - ENV + HTML
                                </a><br />
                                Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
                                <b>Due</b> May 13 at 11:59pm | 100 pts
                            </span>
                            <LessonControlButtons />
                        </li>

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span style={{ display: "inline-block" }}>
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A2 - CSS + Bootstrap
                                </a><br />
                                Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
                                <b>Due</b> May 20 at 11:59pm | 100 pts
                            </span>
                            <LessonControlButtons />
                        </li>


                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <span style={{ display: "inline-block" }}>
                                <a className="wd-assignment-link"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    A3 - Javascript + React
                                </a><br />
                                Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
                                <b>Due</b> May 27 at 11:59pm | 100 pts
                            </span>
                            <LessonControlButtons />
                        </li>
                    </ul>

                </li>
            </ul >
        </div >
    );
}
