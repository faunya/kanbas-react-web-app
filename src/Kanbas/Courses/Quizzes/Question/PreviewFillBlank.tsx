import { useState } from "react";

export default function PreviewFillBlank({ question , scores, setScores, answers, setAnswers}:
    {
        question: any,
        scores: any,
        setScores: (score : any) => void,
        answers: any,
        setAnswers: (score : any) => void,
    }) {

    const [score, setScore] = useState(0);

    const updateScores = (score: any) => {
        const qid = question._id;
        setScore(score);
        setScores({ ...scores, [qid]: score });
    }

    const checkAns = (answer: string) => {
        const rightAns = question.blankAns.find((a: any) => a.answer == answer);
        if (rightAns) {
            updateScores(question.points);
            setAnswers({...answers, [question._id]: true})
        } else {
            updateScores(0);
            setAnswers({...answers, [question._id]: false})
        }
    }

    return (
        <div>
            {score} <br />
            <input type="text" className="form-control" placeholder="Answer" 
            onChange={(e) => checkAns(e.target.value)}/>
        </div>
    )
}