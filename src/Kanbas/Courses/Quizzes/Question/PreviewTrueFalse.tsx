import { useState } from "react";

export default function PreviewTrueFalse({ question }: { question: any }) {
    const [score, setScore] = useState(0);

    return (
        <div>
            {score}<br />
            <input type="radio" name={question._id} id={"true" + question._id}
                value={(question.trueFalse) ? question.points : 0}
                onChange={(e) => setScore(parseInt(e.target.value))} />
            <label htmlFor={"true" + question._id}>True</label>
            <br />

            <input type="radio" name={question._id} id={"false" + question._id}
                value={(question.trueFalse) ? 0 : question.points}
                onChange={(e) => setScore(parseInt(e.target.value))} />
            <label htmlFor={"false" + question._id}>True</label>
            <br />
        </div>
    )
}