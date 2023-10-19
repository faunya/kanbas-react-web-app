import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Button } from 'react-bootstrap';
import "./assignment.css"

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div className="row ass-buttons" >
                <div>
                    <Form.Control
                        type="text"
                        placeholder="Search for Assignment"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{ width: "300px", margin: "2px" }}
                        className="float-start"
                    />

                    <Button className="grey-button float-end ass-button" variant="light">
                        <FontAwesomeIcon icon="fa fa-ellipsis-v"></FontAwesomeIcon>
                    </Button>

                    <Button className="float-end ass-button" variant="danger">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        Assignment
                    </Button>

                    <Button className="grey-button float-end ass-button" variant="light">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        Group
                    </Button>
                </div>
            </div>
            <hr />

            <div className="list-group">

                <div class="list-group-item list-group-item-secondary">
                    <FontAwesomeIcon icon="fa fa-ellipsis-v" className="float-end" style={{ marginLeft: "20px", marginTop: "5px" }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon="fa-solid fa-plus" className="float-end" style={{ marginTop: "5px" }}></FontAwesomeIcon>
                    <span class="rounded-box float-end"> 40% of total </span>
                    <span style={{ fontWeight: "bold" }}>Assignments</span>
                </div>
                {courseAssignments.map((assignment) => (
                    <div className="list-group-item">
                        <div style={{display:"inline-block"}}>
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="ass-link">
                                {assignment.title}
                            </Link><br />
                            Multiple Modules | Due Date | 100 pts
                        </div>

                        <FontAwesomeIcon icon="fa fa-ellipsis-v" className="float-end ass-icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon="fa-solid fa-circle-check" className="float-end green-icon ass-icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon="fa-solid fa-book fa-lg" className="float-start green-icon ass-icon"></FontAwesomeIcon>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Assignments;