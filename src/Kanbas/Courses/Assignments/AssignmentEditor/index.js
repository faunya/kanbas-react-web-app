import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="row">
                <div>
                    <button className="btn btn-secondary float-end" style={{ marginLeft: "5px" }}>
                        <FontAwesomeIcon icon="fa fa-ellipsis-v"></FontAwesomeIcon>
                    </button>

                    <span className="float-end" style={{ color: "green", marginTop: "7px", marginRight: "10px" }}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" style={{ color: "green" }}></FontAwesomeIcon>
                        Published
                    </span>

                </div>

            </div>

            <hr style={{ marginTop: "30px" }} />

            <label htmlFor="assignmentName" style={{ margin: "5px" }}>Assignment Name</label>
            <input value={assignment.title}
                className="form-control mb-2"
                id="assignmentName" />

            <button onClick={handleSave} className="btn me-2 btn-danger float-end ed-button">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn grey-button float-end ed-button">
                Cancel
            </Link>
        </div>

    );
}


export default AssignmentEditor;