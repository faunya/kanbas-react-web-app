import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import "./dashboard.css";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {
    return (
        <div style={{ marginLeft: "25px", marginTop: "25px" }}>
            <h1>Dashboard</h1>
            <hr />

            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

            <button onClick={addNewCourse} >
                Add
            </button>
            <button onClick={updateCourse} >
                Update
            </button>


            <h3>Published Courses (3)</h3>
            <hr />
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <div className="card , course-card" style={{ width: "290px" }}>
                        <img src={require('../Imgs/FYQtAnnaMAE3gdn.jpg')} className="card-img-top" alt="..."></img>

                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item" style={{ padding: "10px" }}>
                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}>
                                Edit
                            </button>


                            <button
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}>
                                Delete
                            </button>

                            <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                {course.number} {course.name}
                            </h5>

                            <p className="card-text" style={{ color: "grey" }}>
                                {course.number}.{course.startDate}.{course.endDate}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;