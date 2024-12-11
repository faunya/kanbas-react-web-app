import { useEffect, useState } from "react"

export default function ResultMultiChoice({ question, answers, correct }:
    {
        question: any,
        answers: any,
        correct: any,
    }) {
    const [score, setScore] = useState(0);
    useEffect(() => {
        console.log(correct)
    }, [])
    return (
        <div>
            {question.choices.map((c: any) =>
                <div>
                    <input type="radio" className="form-check-input" id={c._id} name={question._id}
                        value={(c.correct) ? question.points : 0}
                        checked={c.correct && correct} />

                    <label className="ms-2" htmlFor={c._id}>{c.answer}</label>
                </div>
            )}
        </div>
    )
}