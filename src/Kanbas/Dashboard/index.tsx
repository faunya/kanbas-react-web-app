import { Link } from "react-router-dom";

import * as db from "../Database";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "../Courses/People/reducer";

export default function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[];
            course: any;
            setCourse: (course: any) => void;
            addNewCourse: () => void;
            deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }) {

    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [displayAll, setDisplayAll] = useState(false);
    const displayedCourses = displayAll ? courses :
        courses.filter((course) =>
            enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
            ));



    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {(currentUser.role == 'FACULTY') &&
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} > Add </button>

                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                        <input value={course.name} className="form-control mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })} />

                        <textarea value={course.description} className="form-control"

                            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    </h5><br />
                    <hr />
                </div>
            }

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            {
                currentUser.role == "STUDENT" &&
                <button id="switch-display-courses" className="btn btn-primary float-end"
                    onClick={() => { displayAll ? setDisplayAll(false) : setDisplayAll(true) }}> Enrollments </button>

            }
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    {displayedCourses
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <img src={course.image} width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name} </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>

                                            <button className="btn btn-primary"> Go </button>

                                            {currentUser.role == 'STUDENT' && (
                                                (enrollments.some(
                                                    (enrollment: any) =>
                                                        enrollment.user === currentUser._id &&
                                                        enrollment.course === course._id
                                                )) ?
                                                    <button
                                                        className="btn btn-danger float-end"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            dispatch(deleteEnrollment(
                                                                enrollments.filter((a: any) => (a.course == course._id && a.user == currentUser._id))[0]._id
                                                            ));
                                                            console.log(enrollments);
                                                        }}
                                                        id="wd-delete-course-click">
                                                        Unenroll
                                                    </button>
                                                    :

                                                    <button
                                                        className="btn btn-success float-end"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            dispatch(addEnrollment({"course": course._id, "user" : currentUser._id}));
                                                        }}
                                                        id="wd-delete-course-click">
                                                        Enroll
                                                    </button>
                                            )}
                                            {
                                                (currentUser.role == 'FACULTY') &&
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                            }

                                            {
                                                (currentUser.role == 'FACULTY') &&
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            }

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </div>
    );
}
