import React from "react";
import { Link, useParams } from "react-router-dom";

import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../../Database";

function StatusList() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <div>
            <div className="home-sidebar">
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-file-import" className="button-icon" />
                    Import Existing Content
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="button-icon" />
                    Import From Commons
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-location-crosshairs" className="button-icon" />
                    Choose Home Page
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-chart-simple" className="button-icon" />
                    View Course Stream
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-bullhorn" className="button-icon" />
                    New Announcement
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-chart-simple" className="button-icon" />
                    New Analytics
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-regular fa-bell" className="button-icon" />
                    View Course Notificiations
                </button><br />
            </div>

            <div style={{ marginTop: "20px" }}>
                <h4>To Do</h4>
                <hr />

                {courseAssignments.map((assignment) => (
                    <div className="list-group-item">
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="calendar-item-icon" />
                            <div className="calendar-item">
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="ass-link">
                                    {assignment.title}
                                </Link><br />
                                <p>
                                    {assignment.course} <br />
                                    Due Date
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StatusList;