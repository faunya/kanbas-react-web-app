import { BsGripVertical } from "react-icons/bs";
import QuizButtons from "./QuizButtons";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { deleteQuiz, setQuizzes } from "./reducer";
import { useEffect } from "react";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdDoNotDisturb } from "react-icons/md";

export default function Quizzes() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    const removeAssignment = async (quizId: string) => {
        await quizzesClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };

    const curDate = new Date();

    useEffect(() => {
        fetchQuizzes();
        console.log(curDate);
    }, []);

    return (
        <div>
            <QuizButtons />
            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

                    <div id="wd-quizzes-title" className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <b>Quizzes</b>
                    </div>

                    <ul className="wd-lessons list-group rounded-0">

                        {quizzes.map
                            ((quiz: any) => (
                                <li className="wd-lesson wd-quiz-list-item list-group-item p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />

                                    <span className="vertical-center" style={{ display: "inline-block" }}>
                                        <a className="wd-quiz-link"
                                            href={"#" + pathname + "/details/" + quiz._id}>
                                            {quiz.title}
                                        </a><br />

                                        <span className="quiz-desc">
                                            <span className="red-text">Multiple Modules </span> |
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
                                            | <br />
                                            <b>Due</b> {quiz.dueDate} | {quiz.points} pts
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
                                                    <li className="dropdown-item"><a href="#"></a></li>
                                                </ul>
                                            </div>

                                            <FaTrash className="text-danger me-2 mb-1" onClick={() => removeAssignment(quiz._id)} />
                                            {(quiz.published) ? <GreenCheckmark /> : <MdDoNotDisturb className="text-danger me-2 mb-1" />}
                                        </div>

                                    }
                                </li>

                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}