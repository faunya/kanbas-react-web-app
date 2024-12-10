import { useState } from "react";
import MultiChoice from "./MultiChoice";
import TrueFalse from "./TrueFalse";
import FillBlank from "./FillBlank";
import { set } from "mongoose";
import DefaultEditor from "react-simple-wysiwyg";
import { FaTrash } from "react-icons/fa";

import * as questionClient from "./client";

export default function Question({ questData, questions, setQuestions }: {
    questData: any,
    questions: any[],
    setQuestions: (questions: any) => void
}) {
    const [question, setQuestion] = useState(questData);
    const [desc, setDesc] = useState(question.question);

    const deleteQuestion = async (questionId: string) => {
        //console.log(questions)
        await questionClient.deleteQuestion(questionId);
        setQuestions(questions.filter((q) => (q._id != question._id)));
    }

    return (
        <div className="m-3">
            <div className="grey-border m-2 row">
                <div className="m-1 col-sm-3">
                    <input id="wd-name" type="input" className="form-control"
                        defaultValue={question.title}
                        placeholder="Title"
                        onChange={(e) =>
                            setQuestion({ ...question, title: e.target.value })} />
                </div>

                <div className="m-1 col-lg-5">
                    <select className="form-select" id="wd-question-type"
                        onChange={(e) =>
                            setQuestion({ ...question, questType: e.target.value })}>

                        <option selected={(question.questType === "MULTIPLE CHOICE"
                            || (question.questType === null))} value="MULTIPLE CHOICE">Multple Choice</option>

                        <option selected={question.questType === "TRUE FALSE"} value="TRUE FALSE">True or False</option>
                        <option selected={question.questType === "FILL BLANK"} value="FILL BLANK">Fill in the Blank</option>
                    </select>
                </div>

                <div className="m-1 col-sm-3 row float-end">
                    <div className="col float-end"><label htmlFor="wd-pts" className="col-form-label">Pts</label></div>
                    <div className="col">
                        <input type="number" defaultValue={question.points} id="wd-pts" className="form-control"
                            onChange={(e) =>
                                setQuestion({ ...question, points: e.target.value })} />
                    </div>
                </div>
            </div>

            <div className="grey-border m-2 overflow">
                <div className="row">
                    <div className="m-3">
                        <label htmlFor="wd-quest" className="col-form-label"><b>Question:</b></label>
                        <DefaultEditor value={desc}
                            containerProps={{ style: { width: "95%" } }}
                            onChange={(e) => {
                                setDesc(e.target.value);
                                setQuestion({ ...question, question: e.target.value });
                            }} />
                    </div>
                </div>

                {(question.questType === "MULTIPLE CHOICE") ? <MultiChoice question={question} setQuestion={setQuestion} />
                    : ((question.questType === "TRUE FALSE") ? <TrueFalse question={question} setQuestion={setQuestion} /> :
                        //Fill in blank
                        <FillBlank question={question} setQuestion={setQuestion} />)}
                <FaTrash className="text-danger me-3 mb-1 float-end"
                    onClick={() => (deleteQuestion(question._id))} />
            </div>


        </div>
    )
}