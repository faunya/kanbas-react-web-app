import { useState } from "react";

export default function ResultFillBlank({ question, answers }:
    {
        question: any,
        answers: any,
    }) {
        const getAnswer = () => {
            try {
                return answers[question._id];
            } catch (error) {
                return ""
            }
        }
        //value={answers[question._id]}
    return (
        <div>
            <input type="text" className="form-control" placeholder="Answer"
                value={getAnswer()} />
        </div>
    )
}