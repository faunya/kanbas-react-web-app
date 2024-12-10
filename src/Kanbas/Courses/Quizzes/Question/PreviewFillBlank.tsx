import { useState } from "react";

export default function PreviewFillBlank({ question }: { question: any }) {
    const [score, setScore] = useState(0);

    const checkAns = (answer: string) => {
        const rightAns = question.blankAns.find((a: any) => a.answer == answer);
        if (rightAns) {
            setScore(question.points);
        } else {
            setScore(0);
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