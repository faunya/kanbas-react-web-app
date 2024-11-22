import { BsGripVertical } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useLocation, useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import IndiAssignControlButtons from "./IndiAssignControlButtons";
import * as coursesClient from "../client";
import { useEffect } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);

    return (
        <div id="wd-assignments">
            <AssignmentButtons />
            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                    <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <b>ASSIGNMENTS</b>
                        <AssignmentControlButtons />
                        <span className="float-end rounded-border grey-border" style={{ marginRight: "10px" }}>40% of Total </span>
                    </div>

                    <ul className="wd-lessons list-group rounded-0">

                        {assignments
                            .map((assignment: any) => (
                                <li className="wd-lesson wd-assignment-list-item list-group-item p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />

                                    <span className="vertical-center" style={{ display: "inline-block" }}>
                                        <a className="wd-assignment-link"
                                            href={"#" + pathname + "/" + assignment._id}>
                                            {assignment.title}
                                        </a><br />

                                        <span className="assignment-desc">
                                            <span className="red-text">Multiple Modules </span>
                                            | <b>Not available until</b> {assignment.availableDate} | <br />
                                            <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                                        </span>

                                    </span>
                                    <IndiAssignControlButtons
                                        assignmentId={assignment._id}
                                        deleteAssignment={(assignmentId) => dispatch(deleteAssignment(assignmentId))} />
                                </li>

                            ))}
                    </ul>
                </li>
            </ul>
        </div >
    );
}
