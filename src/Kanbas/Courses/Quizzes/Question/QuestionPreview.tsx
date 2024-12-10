import { useEffect, useState } from "react";
import MultiChoice from "./MultiChoice";
import TrueFalse from "./TrueFalse";
import FillBlank from "./FillBlank";
import DefaultEditor from "react-simple-wysiwyg";
import parse from 'html-react-parser';
import { FaTrash } from "react-icons/fa";

import * as questionClient from "./client";
import HTMLReactParser from "html-react-parser";
import PreviewMultiChoice from "./PreviewMultiChoice";
export default function QuestionPreview({ question, deleteQuestion }:
    {
        question: any,
        deleteQuestion: (questionId: string) => void
    }) {

    return (
        <div className="m-3 form" id="question">
            <div className="grey-border m-2 p-2 mb-0">
                <span className="m-1 p-2"><b>{question.title}</b></span>

                <span className="me-2 float-end">{question.points} pts</span>
            </div>

            <div className="grey-border mt-0 m-2 no-top-border p-3">
                <div className="mb-3"><span>{parse(question.question)}</span></div>

                {(question.questType === "MULTIPLE CHOICE") ? <PreviewMultiChoice question={question} />
                    : ((question.questType === "TRUE FALSE") ? <div>trufalse</div> ://<TrueFalse question={question} /> :
                        //Fill in blank
                        <div>blank</div>
                        //<FillBlank question={question} />
                    )}

                <FaTrash className="text-danger me-3 mb-1 float-end"
                    onClick={() => (deleteQuestion(question._id))} />

            </div>


        </div>
    )
}