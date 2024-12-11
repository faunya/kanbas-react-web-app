import { useEffect, useState } from "react";
import { useParams } from "react-router";
import QuestionPreview from "./Question/QuestionPreview";
import { useDispatch, useSelector } from "react-redux";

import * as quizClient from "./client";
import * as userClient from "../../Account/client";
import * as attemptClient from "./AttemptClient";

export default function QuizPreview() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const [questions, setQuestions] = useState<any[]>([]);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const lookupQuiz = quizzes.filter((quiz: any) => quiz._id === qid)[0];
    const quiz = lookupQuiz ||
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
    };

    const date = new Date();
    const getCurDate = () => date.toDateString();
    const getCurTime = () => date.toLocaleTimeString("en-US")

    const attemptTemplate = {
        "attempt": 1,
        "points": 0,
        "answers": {},
        "startDate": date.toISOString(),
        "user": currentUser._id,
        "quiz": qid
    }

    const [scores, setScores] = useState({});
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState({});
    const [curDate, setCurDate] = useState(getCurDate);
    const [curTime, setCurTime] = useState(getCurTime);
    const [attempt, setAttempt] = useState(attemptTemplate);

    const lookupAttempt = async () => {
        if (qid) {
            const curAttempt = await userClient.findQuizAttemptForUser(qid);
            if (!curAttempt) {
                const newAttempt = await quizClient.createAttemptForQuiz(qid, attemptTemplate);
                setAttempt(newAttempt);
                console.log(attempt);
            } else {
                setAttempt(curAttempt);
                setAnswers(curAttempt.answers)
                setScore(curAttempt.points)
                setCurDate(new Date(curAttempt.startDate).toDateString());
                setCurTime(new Date(curAttempt.startDate).toLocaleTimeString("en-US"));
            }
        }
    }

    const lookupQuestions = async () => {
        try {
            if (qid) {
                const questions = await quizClient.findQuestionsForQuiz(qid);
                setQuestions(questions);
            }

        } catch (error) {
            console.error("get questions ", error);
        }
    }

    const updateAttempt = async () => {
        console.log("old", attempt)
        const totalScore = sumValues(scores);
        console.log(totalScore);
        const newAttempt = { ...attempt, points: totalScore };
        await attemptClient.updateAttempt(newAttempt);
        console.log("new", newAttempt)
        setScore(totalScore);
        setAttempt(newAttempt);
    }

    const sumValues = (obj: any) => Object.values(obj).reduce((a: number, b: any) => a + b, 0);

    useEffect(() => {
        lookupQuestions();
        lookupAttempt();
    }, [])
    return (
        <div>
            <h1><b>{quiz.title}</b></h1>
            <span>Started: {curDate} at {curTime}</span>
            {score} hello
            <hr />
            {questions.map((question: any) => (
                <QuestionPreview
                    question={question}
                    scores={scores} setScores={setScores}
                    answers={answers} setAnswers={setAnswers} />
            ))}
            <button onClick={() => {
                updateAttempt();
            }
            } >Yea</button>
        </div>
    )
}