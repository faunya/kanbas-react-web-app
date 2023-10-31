import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files  "];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group page-navbar">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) ? "page-navbar-selected" : "page-navbar-item"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;