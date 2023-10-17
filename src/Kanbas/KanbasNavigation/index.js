import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["bi bi-person-circle", "bi bi-speedometer2",]
    const { pathname } = useLocation();
    return (

        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <i class={icons[key]}></i><br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;