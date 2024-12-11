import { BsGripVertical } from "react-icons/bs";
import QuizButtons from "./QuizButtons";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import * as userClient from "../../Account/client";

import { addQuiz, deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import { useEffect, useState } from "react";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdDoNotDisturb } from "react-icons/md";

export default function Quiz({ quiz, saveQuiz, removeQuiz }:
    {
        quiz: any,
        saveQuiz: (quiz: any) => void,
        removeQuiz: (quiz: any) => void
    }) {
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const curDate = new Date();

    const [questNum, setQuestNum] = useState(0);
    const lookupQuestNum = async () => {
        if (quiz._id) {
            const questions = await quizzesClient.findQuestionsForQuiz(quiz._id);
            setQuestNum(questions.length);
        } else
            setQuestNum(0);
    }

    useEffect(() => {
        lookupQuestNum();
    });

    return (
        <li className="wd-lesson wd-quiz-list-item list-group-item p-3 ps-1">

            <span className="vertical-center ps-2" style={{ display: "inline-block" }}>
                <a className="wd-quiz-link"
                    href={"#" + pathname + "/details/" + quiz._id}>
                    {quiz.title}
                </a><br />

                <span className="quiz-desc">
                    {   //not available condition
                        (curDate < new Date(quiz.availableDate)) ?
                            <span><b>Not available until</b> {new Date(quiz.availableDate).toDateString()} </span> :

                            //available condition
                            ((curDate >= new Date(quiz.availableDate)) &&
                                (curDate < new Date(quiz.untilDate))) ?
                                <span><b>Available</b></span> :

                                //closed condition
                                <span><b>Closed</b></span>
                    }

                    <span> | <b>Due</b> {new Date(quiz.dueDate).toDateString()} | {quiz.points} pts | {questNum} Questons </span>
                    {
                        (currentUser.role === 'STUDENT') &&
                        <span> | <b>Score: </b> - </span>
                    }
                </span>

            </span>

            {
                (currentUser.role === 'FACULTY') &&
                <div className="float-end">
                    <div className="dropdown float-end">
                        <button id="wd-quiz-menu-dropdown" className="btn me-1assign-btn dropdown-toggle"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaEllipsisV />
                        </button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <a href={"#" + pathname + "/edit/" + quiz._id}>Edit</a>
                            </li>

                            {(quiz.published === true) ?
                                <li className="dropdown-item"
                                    onClick={() => {
                                        saveQuiz({ ...quiz, published: false });
                                    }}>
                                    Unpublish
                                </li> :
                                <li className="dropdown-item"
                                    onClick={() => {
                                        saveQuiz({ ...quiz, published: true });
                                    }}>
                                    Publish
                                </li>
                            }

                            <li className="dropdown-item"

                                onClick={() => {
                                    removeQuiz(quiz._id);
                                    console.log("clicked")
                                }}>
                                Delete
                            </li>
                        </ul>
                    </div>
                    {(quiz.published) ?
                        <GreenCheckmark /> :
                        <MdDoNotDisturb className="text-danger mt-2 me-2 mb-1"
                            onClick={() => {
                                saveQuiz({ ...quiz, published: true });
                            }} />}
                </div>

            }
        </li>
    )
}