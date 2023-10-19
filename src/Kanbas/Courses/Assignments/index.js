import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {Form , Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./assignment.css"

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>

            <div className="row ass-buttons" >
                <div>
                    <Form.Control
                        type="text"
                        placeholder="Search for Assignment"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        style={{width:"300px" , margin:"2px"}}
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
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        {assignment.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;