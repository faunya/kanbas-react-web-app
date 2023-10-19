import ModuleList from "../Modules/ModuleList";
import StatusList from "./statusList";


function Home() {
    return (
        <div>
            <div style={{ display: "inline-block", width: "80%" }}>
                <ModuleList />
            </div>
            <div style={{ display: "inline-block", width: "19%", verticalAlign: "top", marginLeft: "10px" }}>
                <StatusList />
            </div>
        </div>
    );
}
export default Home;