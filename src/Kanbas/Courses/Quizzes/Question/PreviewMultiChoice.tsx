import { useState } from "react"

export default function PreviewMultiChoice({ question }: { question: any }) {
    const [score, setScore] = useState(0);

    return (
        <div>
            {score}
            {question.choices.map((c: any) =>
                <div>
                    <input type="radio" className="form-check-input" id={c._id} name={question._id}
                        value={(c.correct) ? question.points : 0}
                        onChange={(e) => { setScore(parseInt(e.target.value)) }} />

                    <label className="ms-2" htmlFor={c._id}>{c.answer}</label>
                </div>
            )}
        </div>
    )
}