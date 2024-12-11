import { useState } from "react"

export default function PreviewMultiChoice({ question, scores, setScores, answers, setAnswers }:
    {
        question: any,
        scores: any,
        setScores: (score: any) => void,
        answers: any,
        setAnswers: (score: any) => void,
    }) {
    const [score, setScore] = useState(0);

    const updateScores = (score: any) => {
        const qid = question._id;
        setScore(score);
        setScores({ ...scores, [qid]: score });
    }

    return (
        <div>
            {score}
            {question.choices.map((c: any) =>
                <div>
                    <input type="radio" className="form-check-input" id={c._id} name={question._id}
                        value={(c.correct) ? question.points : 0}
                        onChange={(e) => {
                            updateScores(parseInt(e.target.value));
                            setAnswers({...answers, [question._id]: c._id});
                        }} />

                    <label className="ms-2" htmlFor={c._id}>{c.answer}</label>
                </div>
            )}
        </div>
    )
}