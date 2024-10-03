import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>
                    {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Bruce</span>{" "}
                        <span className="wd-last-name">Wayne</span></td>
                        <td className="wd-login-id">009876534S</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Gandalf</span>{" "}
                        <span className="wd-last-name">Grey</span></td>
                        <td className="wd-login-id">007777777T</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">PROFESSOR</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tom</span>{" "}
                        <span className="wd-last-name">Cruise</span></td>
                        <td className="wd-login-id">009923232T</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">PROFESSOR</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>
                </tbody>
            </table>
        </div>
        );
}