import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["fa fa-user-circle", "fa-solid fa-gauge", "fa fa-book", "fa fa-calendar", "fa fa-envelope-open",
        "fa fa-clock", "fa fa-tv", "fa fa-arrow-alt-circle-right", "fa fa-question-circle"];
    const { pathname } = useLocation();
    
    return (
        <div style={{ width: 100, height: 1000, "backgroundColor": "black" }}>
            <div className="list-group" style={{ width: 100, "backgroundColor": "black", padding: "5px" }}>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item ${(pathname.includes(link) && "navbar-item-active") || "navbar-item"}`}>
                        <FontAwesomeIcon icon={icons[index]} size="2x" color={("Account".match(link) && "grey") || "red"}></FontAwesomeIcon><br />
                        {link}
                    </Link>
                ))}
            </div>

        </div>
    );
}
export default KanbasNavigation;