import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { Dropdown, Button } from "react-bootstrap";

import "./module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            <div className="row" >
                <div className="module-buttons">
                    <Button className="grey-button float-end mod-button" variant="light">
                        <FontAwesomeIcon icon="fa fa-ellipsis-v"></FontAwesomeIcon>
                    </Button>
                    <Button className="float-end mod-button" variant="danger">
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        Module
                    </Button>

                    <Dropdown>
                        <Dropdown.Toggle className="grey-button float-end mod-button" style={{ backgroundColor: "#e8e8e8" }}>
                            Publish All
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Button className="grey-button float-end mod-button" variant="light">
                        <FontAwesomeIcon icon="fa-regular fa-circle-check" style={{ color: "green" , marginRight:"5px"}} />
                        View Progress
                    </Button>
                    <Button className="grey-button float-end mod-button" variant="light">Collapse All</Button>
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