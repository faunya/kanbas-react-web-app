import { useState } from "react";

export default function PreviewTrueFalse({ question, scores, setScores, answers, setAnswers }:
    {
        question: any,
        scores: any,
        setScores: (score: any) => void,
        answers: any,
        setAnswers: (score: any) => void,
    }) {

    const updateScores = (score: any) => {
        const qid = question._id;
        setScore(score);
        setScores({ ...scores, [qid]: score });
    }

    const [score, setScore] = useState(0);
    return (
        <div>
            {score}<br />
            <input type="radio" name={question._id} id={"true" + question._id}
                value={(question.trueFalse) ? question.points : 0}
                onChange={(e) => {
                    updateScores(parseInt(e.target.value));
                    setAnswers({...answers, [question._id]: "true"});
                    console.log(scores)
                }} />
            <label htmlFor={"true" + question._id}>True</label>
            <br />

            <input type="radio" name={question._id} id={"false" + question._id}
                value={(question.trueFalse) ? 0 : question.points}
                onChange={(e) => {
                    updateScores(parseInt(e.target.value));
                    setAnswers({...answers, [question._id]: "false"});
                }} />
            <label htmlFor={"false" + question._id}>False</label>
            <br />
        </div>
    )
}