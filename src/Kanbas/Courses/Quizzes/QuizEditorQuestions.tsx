import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import { FaPlus, FaTrash } from "react-icons/fa";

import * as quizClient from "./client";
import Question from "./Question/Question";

export default function QuizEditorQuestions({ quiz, setQuiz, createQuizForCourse, saveQuiz }:
    {
        quiz: any,
        setQuiz: (quiz: any) => void,
        createQuizForCourse: (quiz: any) => void,
        saveQuiz: (quiz: any) => void
    }) {
    const { qid } = useParams();

    const [questions, setQuestions] = useState<any[]>([]);
    const newQuestionTemplate = {
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
    };

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
        if (qid) {
            const newQuestion = await quizClient.createQuestionForQuiz(qid, newQuestionTemplate)
            const newQuestions = [...questions, newQuestion];
            setQuestions(newQuestions)
            return newQuestion;
        }
        return;
    };

    useEffect(() => {
        lookup();
    }, [])
    return (
        <div>
            {questions.map
                ((question: any) => (
                    <Question questData={question} questions={questions} setQuestions={setQuestions} />

                ))}
            <div className="text-center">
                <button className="btn btn-secondary me-1 float-center assign-btn"
                    onClick={() => createNewQuestion()}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    New Question</button>

            </div>

        </div >
    )
}