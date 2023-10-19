import ModuleList from "../Modules/ModuleList";


function Home() {
    return (
        <div>

            <h2>Home</h2>
            <div style={{ display: "inline-block" , width:"80%"}}>
                <ModuleList />
            </div>
            <div style={{ display: "inline-block" , width:"20%"}}>
                <h2>Status</h2>

            </div>
        </div>
    );
}
export default Home;