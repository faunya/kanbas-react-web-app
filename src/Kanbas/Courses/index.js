import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Breadcrumb } from "react-bootstrap";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);

    // getting the course URL and creating the home URL
    const curUrl = window.location.href;
    const split = curUrl.split("/");
    const curPage = split.pop();
    const courseURL = split.join("/");
    const homeURL = courseURL.concat("/")

    return (
        <div>
            <div style={{ "margin": "25px" }}>
                <FontAwesomeIcon icon={'fa fa-bars'} size="2x" style={{ color: "#D41B2C" }}></FontAwesomeIcon>
                <Breadcrumb style={{ "display": "inline-block", "marginLeft": "25px", color: "#D41B2C" }}>
                    <Breadcrumb.Item href={homeURL}>{course.number} {course.name}</Breadcrumb.Item>
                    <Breadcrumb.Item active>{curPage}</Breadcrumb.Item>
                </Breadcrumb>
                <hr />
                <CourseNavigation />
                <div>
                    <div
                        className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{
                            left: "320px",
                            top: "50px",
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<h1>Home</h1>} />
                            <Route path="Modules" element={<h1>Modules</h1>} />
                            <Route path="Assignments" element={<h1>Assignments</h1>} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<h1>Assignment Editor</h1>}
                            />
                            <Route path="Grades" element={<h1>Grades</h1>} />
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Courses;