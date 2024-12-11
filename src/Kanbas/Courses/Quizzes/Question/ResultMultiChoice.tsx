import { useEffect, useState } from "react"

export default function ResultMultiChoice({ question, answers }:
    {
        question: any,
        answers: any,
    }) {
        
    return (
        <div>
            {question.choices.map((c: any) =>
                <div>
                    <input type="radio" className="form-check-input" id={c._id} name={question._id}
                        checked={c._id === answers[question._id]} />

                    <label className="ms-2" htmlFor={c._id}>{c.answer}</label>
                </div>
            )}
        </div>
    )
}