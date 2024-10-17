import { BsGripVertical } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";

import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div id="wd-assignments">
            <AssignmentButtons /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <b>ASSIGNMENTS</b>
                        <AssignmentControlButtons />
                        <span className="float-end rounded-border grey-border" style={{ marginRight: "10px" }}>40% of Total </span>
                    </div>

                    {assignments.filter((assignment: any) => assignment.course === cid)
                        .map((assignment: any) => (
                            <li className="wd-lesson wd-assignment-list-item list-group-item p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" />

                                <span className="vertical-center" style={{ display: "inline-block" }}>
                                    <a className="wd-assignment-link"
                                        href="#/Kanbas/Courses/1234/Assignments/123">
                                        {assignment.title}
                                    </a><br />

                                    <span className="assignment-desc">
                                        <span className="red-text">Multiple Modules </span>
                                        | <b>Not available until</b> May 6 at 12:00am | <br />
                                        <b>Due</b> May 13 at 11:59pm | 100 pts
                                    </span>

                                </span>
                                <LessonControlButtons />
                            </li>

                        ))}
                </li>
            </ul>
        </div >
    );
}
