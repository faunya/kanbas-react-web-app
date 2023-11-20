import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    const API_BASE = process.env.LAB5_API_BASE;
    console.log(process.env.LAB5_API_BASE);
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