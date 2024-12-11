import { useState } from "react";

export default function ResultFillBlank({ question, answers }:
    {
        question: any,
        answers: any,
    }) {

    return (
        <div>
            <input type="text" className="form-control" placeholder="Answer"
                value={answers[question._id]} />
        </div>
    )
}