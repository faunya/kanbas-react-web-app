import { BsGripVertical } from "react-icons/bs";
import QuizButtons from "./QuizButtons";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { deleteQuiz, setQuizzes } from "./reducer";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Quizzes() {
    const { cid } = useParams();
    const { pathname } = useLocation();
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

    useEffect(() => {
        fetchQuizzes();
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
                        <span className="float-end rounded-border grey-border" style={{ marginRight: "10px" }}>40% of Total </span>
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
                                            <span className="red-text">Multiple Modules </span>
                                            | <b>Not available until</b> {quiz.availableDate} | <br />
                                            <b>Due</b> {quiz.dueDate} | {quiz.points} pts
                                        </span>

                                    </span>

                                    <div className="float-end">
                                        <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-confirm-delete-dialog" />
                                        <GreenCheckmark />
                                        <IoEllipsisVertical className="fs-4" />
                                    </div>

                                </li>

                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}