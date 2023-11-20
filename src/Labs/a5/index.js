import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    const API_BASE = process.env.REACT_APP_LAB5_BASE || "http://localhost:4000/a5";
    const URL = `${API_BASE}/welcome`;
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={URL}
                    className="list-group-item">
                    Welcome
                </a>
                <EncodingParametersInURLs />
                <WorkingWithObjects />
                <WorkingWithArrays />
            </div>
        </div>
    );
}
export default Assignment5;