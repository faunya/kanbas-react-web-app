import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import Button from 'react-bootstrap/Button';

import "./module.css";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            <div className="row" >
                <div>
                    <Button className="grey-button float-end" variant="light">Primary</Button>
                    <Button className="grey-button float-end" variant="danger">Primary</Button>
                    <Button className="grey-button float-end" variant="light">Primary</Button>
                    <Button className="grey-button float-end" variant="light">Primary</Button>
                    <Button className="grey-button float-end" variant="light">Primary</Button>
                </div>
            </div>

            <hr />
            <ul className="list-group" style={{ marginTop: "30px" }}>
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item module-item" style={{ marginBottom: "50px" }}>
                                <h3>{module.name}</h3>
                                <p>{module.description}</p>
                            </li>
                        ))
                }
            </ul>

        </div>
    );
}
export default ModuleList;