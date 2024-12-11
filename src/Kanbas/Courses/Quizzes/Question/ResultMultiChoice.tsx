import { useEffect, useState } from "react"

export default function ResultMultiChoice({ question, answers }:
    {
        question: any,
        answers: any,
    }) {

        const getAnswer = (cid : string) => {
            try {
                return answers[question._id] == cid;
            } catch (error) {
                return false
            }
        }


        useEffect(() => {
            console.log(question._id)
        },[])
        
    return (
        <div>
            {question.choices.map((c: any) =>
                <div>
                    <input type="radio" className="form-check-input" id={c._id} name={question._id}
                        checked={getAnswer(c._id)} />

                    <label className="ms-2" htmlFor={c._id}>{c.answer}</label>
                </div>
            )}
        </div>
    )
}