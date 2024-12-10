import { useEffect, useState } from "react";
import MultiChoice from "./MultiChoice";
import TrueFalse from "./TrueFalse";
import FillBlank from "./FillBlank";
import DefaultEditor from "react-simple-wysiwyg";
import { FaTrash } from "react-icons/fa";

import * as questionClient from "./client";
import QuestionEdit from "./QuestionEdit";
import QuestionPreview from "./QuestionPreview";

export default function Question({ questData, questions, setQuestions }: {
    questData: any,
    questions: any[],
    setQuestions: (questions: any) => void
}) {
    const [question, setQuestion] = useState(questData);
    const [desc, setDesc] = useState(question.question);

    const [editing, setEditing] = useState(false);

    const deleteQuestion = async (questionId: string) => {
        await questionClient.deleteQuestion(questionId);
        setQuestions(questions.filter((q) => (q._id != question._id)));
    }

    const resetChange = () => {
        setQuestion(questData);
        setDesc(questData.question);
    }

    const saveQuestion = async () => {
        console.log(question);
        await questionClient.updateQuestion(question);
        setQuestions(
            questions.map((q) => {
                if (q._id === question._id) {
                    return question;
                } else {
                    return q;
                }
            }));
    }

    useEffect(() => { }, [question, desc])

    return (
        <div className="overflow">
            {editing ?
                <QuestionEdit question={question} setQuestion={setQuestion}
                    deleteQuestion={deleteQuestion} resetChange={resetChange}
                    saveQuestion={saveQuestion} />
                : <QuestionPreview question={question} deleteQuestion={deleteQuestion} />}

            <FaTrash className="text-danger me-4  mt-2 float-end"
                onClick={() => (deleteQuestion(question._id))} />

            <button className="btn btn-secondary me-2 text-align-end  float-end" onClick={() => {
                (editing) ? setEditing(false) : setEditing(true)}}>
                {(editing) ? "Preview" : "Edit"}
            </button>

        </div>
    )
}