import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { cid } = useParams();
    const { pathname } = useLocation();
    const pathPred = "/Kanbas/Courses/"

    console.log(cid)
    console.log(pathname)

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

            {links.map((link) => (
                <Link key={pathPred + cid + "/" + link} to={pathPred + cid + "/" + link}
                    className={`list-group-item text-danger border border-0
              ${pathname.includes(link) ? "text-danger active" : "text-danger"}`}>
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
