import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as quizClient from "./client";
import QuestionPreview from "./Question/QuestionPreview";
import { useDispatch, useSelector } from "react-redux";

export default function QuizPreview() {
    const { cid, qid } = useParams();

    const [questions, setQuestions] = useState<any[]>([]);
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

    const lookup = async () => {
        try {
            if (qid) {
                const questions = await quizClient.findQuestionsForQuiz(qid);
                setQuestions(questions);
            }

        } catch (error) {
            console.error("get questions ", error);
        }
    }

    const date = new Date();
    const curDate = date.toDateString();
    const curTime = date.toLocaleTimeString("en-US")

    useEffect(() => {
        lookup();
    })
    return (
        <div>
            <h1><b>{quiz.title}</b></h1>
            <span>Started: {curDate} at {curTime}</span>
            <hr />
            {questions.map((question: any) => (
            <QuestionPreview question={question} />
        ))}</div>
    )
}