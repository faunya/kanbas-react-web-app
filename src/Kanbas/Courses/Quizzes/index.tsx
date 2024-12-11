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
import Quiz from "./Quiz";

export default function Quizzes() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const [attempts, setAttempts] = useState(userClient.findQuizAttemptsForUser);

    const fetchQuizzes = async () => {
        const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
        if (currentUser.role == "STUDENT") {
            dispatch(setQuizzes(publishedQuizzes()));
            return;
        }
        dispatch(setQuizzes(quizzes));
    };

    const publishedQuizzes = () => {
        const published = quizzes.filter((quiz : any) => quiz.published)
        return published;
    }

    const removeQuiz = async (quizId: string) => {
        await quizzesClient.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };

    const saveQuiz = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };

    const lookupQuestNum = async (qid: string) => {
        if (qid) {
            const questions = await quizzesClient.findQuestionsForQuiz(qid);
            return questions.length;
        } else
            return 0;
    }

    const lookupQuestNums = async () => {
        try {
            const questNum = quizzes.map((q: any) => {
                const questions = lookupQuestNum(q._id);
                return ({ ...q, questions: questions });
            })
            console.log("questnum", questNum);
            console.log("quizzes", quizzes)
        } catch (error) {
            console.error("get questions ", error);
        }
    }

    useEffect(() => {
        fetchQuizzes();

        lookupQuestNums();
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
                                <Quiz quiz={quiz} saveQuiz={saveQuiz} removeQuiz={removeQuiz} />
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    )
}