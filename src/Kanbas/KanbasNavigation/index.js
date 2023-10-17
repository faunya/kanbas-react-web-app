import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["fa fa-user-circle", "fa-solid fa-gauge", "fa fa-book", "fa fa-calendar", "fa fa-envelope-open", 
                    "fa fa-clock", "fa fa-tv", "fa fa-arrow-alt-circle-right", "fa fa-question-circle"];
    const { pathname } = useLocation();
    return (

        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <FontAwesomeIcon icon={icons[index]} size="2x" color={("Account".match(link) && "white") || "red"}></FontAwesomeIcon><br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;