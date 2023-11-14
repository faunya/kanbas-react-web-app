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

            <div style={{ width: "20%" }}>
                <h5>Course</h5>
                <input value={course.name} className="form-control margin-5"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <input value={course.number} className="form-control margin-5"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                <input value={course.startDate} className="form-control margin-5" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                <input value={course.endDate} className="form-control margin-5" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                <button className="btn btn-success margin-left-5" onClick={addNewCourse} >
                    Add
                </button>
                <button className="btn btn-primary margin-left-5" onClick={updateCourse} >
                    Update
                </button>
            </div>


            <h3>Published Courses (3)</h3>
            <hr />
            <div className="d-flex flex-row flex-wrap">
                {courses.map((c) => (
                    <div className="card , course-card" style={{ width: "290px" }}>
                        <img src={require('../Imgs/FYQtAnnaMAE3gdn.jpg')} className="card-img-top" alt="..."></img>

                        <Link key={c._id} to={`/Kanbas/Courses/${c._id}`} className="list-group-item" style={{ padding: "10px" }}>
                            <button
                                className="btn btn-primary"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(c);
                                }}>
                                Edit
                            </button>


                            <button
                                className="btn btn-danger margin-left-5"
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(c._id);
                                }}>
                                Delete
                            </button>

                            <h5 className="card-title" style={{ fontWeight: "bold" }}>
                                {c.number} {c.name}
                            </h5>

                            <p className="card-text" style={{ color: "grey" }}>
                                {c.number}.{c.startDate}.{c.endDate}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;