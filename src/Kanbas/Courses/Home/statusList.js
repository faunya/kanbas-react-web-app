import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatusList() {

    return (
        <div>
            <div className="home-sidebar">
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-file-import" className="button-icon" />
                    Import Existing Content
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="button-icon" />
                    Import From Commons
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-location-crosshairs" className="button-icon" />
                    Choose Home Page
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-chart-simple" className="button-icon" />
                    View Course Stream
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-bullhorn" className="button-icon" />
                    New Announcement
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-solid fa-chart-simple" className="button-icon" />
                    New Analytics
                </button><br />
                <button className="btn btn-secondary home-button">
                    <FontAwesomeIcon icon="fa-regular fa-bell" className="button-icon" />
                    View Course Notificiations
                </button><br />
            </div>

            <div style={{ marginTop: "20px" }}>
                <h4>To Do</h4>
                <hr />

                <div>
                    <FontAwesomeIcon icon="fa-solid fa-circle-check" className="calendar-item-icon" />
                    <div className="calendar-item">
                        <a href="#">Lecture</a>
                        <p>CS4550.12641.202410<br />
                            Sep 7 at 11:45am
                        </p>
                    </div>
                </div>

                <div>
                    <FontAwesomeIcon icon="fa-solid fa-circle-check" className="calendar-item-icon" />
                    <div className="calendar-item">
                        <a href="#">Lecture</a>
                        <p>CS4550.12641.202410<br />
                            Sep 11 at 11:45am
                        </p>
                    </div>
                </div>

                <div>
                    <FontAwesomeIcon icon="fa-solid fa-circle-check" className="calendar-item-icon" />
                    <div className="calendar-item">
                        <a href="#">CS5610 06 SP23 Lecture</a>
                        <p>CS4550.12641.202410<br />
                            Sep 7 at 11:45am
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusList;