import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import { FaPlus } from "react-icons/fa";

import * as quizClient from "./client";

export default function QuizEditorQuestions({ quiz, setQuiz, createQuizForCourse, saveQuiz }:
    {
        quiz: any,
        setQuiz: (quiz: any) => void,
        createQuizForCourse: (quiz: any) => void,
        saveQuiz: (quiz: any) => void
    }) {
    const { cid, qid } = useParams();
    const { pathname } = useLocation();

    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState({
        "title": "New Question",
        "questType": "MULTIPLE CHOICE",
        "points": 10,
        "question": "",

        //multiple choice
        "choices": [],

        //true or false
        "trueFalse": true,

        //fill in the blank
        "blankAns": [],

        quiz: qid
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

    const createNewQuestion = async () => {
        
    };

    useEffect(() => {
        lookup();
    }, [])
    return (
        <div>Questions

            {questions.map
                ((question: any) => (
                    <div>
                        {question.title}
                    </div>

                ))}
            <div className="text-center">
                <button className="btn btn-secondary me-1 float-center assign-btn">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    New Question</button>

            </div>

        </div >
    )
}