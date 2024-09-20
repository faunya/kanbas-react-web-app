import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="images/logo512.png" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/2234/Home">
                        <img src="images/20240224_131953.jpg" width={200} />
                        <div>
                            <h5>
                                CS2234 Brainrot 101
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Sigma rizzler academy
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/3234/Home">
                        <img src="/images/EOmcmJzVUAA_hlS.jpg" width={200} />
                        <div>
                            <h5>
                                CD3234 Hustler
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Hustler Academy
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/4234/Home">
                        <img src="/images/friday nights.png" width={200} />
                        <div>
                            <h5>
                                CD4234 Trauma
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Trauma Dumping For Dummies
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/5234/Home">
                        <img src="images\Fnk8_IJXkAApoZK.jpg" width={200} />
                        <div>
                            <h5>
                                CD5234 Swag
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Swagging hard
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/6234/Home">
                        <img src="images\EX3-j49XgAcqLPQ.jpg" width={200} />
                        <div>
                            <h5>
                                CD6234 Loser Central
                            </h5>
                            <p className="wd-dashboard-course-title">
                                How to be even more of a loser
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/7234/Home">
                        <img src="images\LbQ-78zC.png" width={200} />
                        <div>
                            <h5>
                                CD7234 Gulag
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Gulag
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
