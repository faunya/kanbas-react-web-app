import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { Dropdown, Button } from "react-bootstrap";

import "./module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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
                        <FontAwesomeIcon icon="fa-regular fa-circle-check" style={{ color: "green", marginRight: "5px" }} />
                        View Progress
                    </Button>
                    <Button className="grey-button float-end mod-button" variant="light">Collapse All</Button>
                </div>
            </div>

            <hr />

            <ul className="list-group" style={{ marginTop: "30px" }}>
                <li className="list-group-item">
                    <button
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                    <input
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        } />
                    <textarea
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        } />
                </li>

                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item module-item" style={{ marginBottom: "50px" }}>
                                <button

                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>

                                <button
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>

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