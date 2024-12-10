import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import QuizEditorDetails from "./QuizEditorDetails";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";

import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { Link } from "react-router-dom";
import QuizEditorQuestions from "./QuizEditorQuestions";

export default function QuizEdtior() {
    const { cid, qid } = useParams();
    const { pathname } = useLocation();

    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const lookupQuiz = quizzes.filter((quiz: any) => quiz._id === qid)[0];
    const [quiz, setQuiz] = useState(lookupQuiz ||
    {
        "title": "New Quiz",
        "published": false,
        "desc": "",
        "quizType": "Graded Quiz",
        "course": cid,
        "points": 100,
        "assignmentGroup": "Quizzes",
        "shuffle": true,
        "timeLimit": 20,
        "multiAttempt": false,
        "numAttempt": 1,
        "showCorrectAnswers": true,
        "accessCode": "",
        "oneQuestAtTime": true,
        "webcam": false,
        "lockQuestions": false,
        "dueDate": "2025-01-01",
        "availableDate": "2025-01-01",
        "untilDate": "2025-01-01",
    });

    const createQuizForCourse = async () => {
        if (!cid) return;
        const newQuiz = await coursesClient.createQuizForCourse(cid, quiz);
        dispatch(addQuiz(newQuiz));
        return newQuiz;
    };

    const saveQuiz = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz(quiz));
    };



    return (
        <div>
            <div>
                <span className="float-end">Points: {quiz.points} {quiz.published ? "Published" : "Not published"}</span>
            </div>
            <br /><hr />

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link aria-current="page" to="details"
                        className={`nav-link  
                        ${pathname.includes("details") ? "text-black active" : "text-danger"}`}>
                        Details</Link>
                </li>

                <li className="nav-item">
                    <Link to="questions"
                        className={`nav-link  
                        ${pathname.includes("questions") ? "text-black active" : "text-danger"}`}>
                        Questions</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<Navigate to="details" />} />
                <Route path="details" element={
                    <QuizEditorDetails
                        quiz={quiz} setQuiz={setQuiz}
                        saveQuiz={saveQuiz} createQuizForCourse={createQuizForCourse} />} />

                <Route path="questions" element={
                    <QuizEditorQuestions
                        quiz={quiz} setQuiz={setQuiz}
                        saveQuiz={saveQuiz} createQuizForCourse={createQuizForCourse} />} />
            </Routes>

            <hr />
            <button className="btn btn-danger float-end " onClick={() => {
                if (lookupQuiz) {
                    saveQuiz(quiz);
                } else {
                    createQuizForCourse();
                }
            }}>
                <a className="save-btn" href={"#/Kanbas/Courses/" + cid + "/Quizzes"}>Save</a></button>
            <button className="btn btn-secondary float-end"><a className="cancel-btn" href={"#/Kanbas/Courses/" + cid + "/Quizzes"}>Cancel</a></button>

        </div>
    )
}