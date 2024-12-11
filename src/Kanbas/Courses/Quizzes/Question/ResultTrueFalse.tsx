import { useState } from "react";

export default function ResultTrueFalse({ question, answers, correct }:
    {
        question: any,
        answers: any,
        correct: any,
    }) {

    
  
    return (
        <div>
            <input type="radio" name={question._id} id={"true" + question._id}
                value={(question.trueFalse) ? question.points : 0}
                checked={(question.trueFalse && correct) || (!question.trueFalse && !correct)} />
            <label htmlFor={"true" + question._id}>True</label>
            <br />

            <input type="radio" name={question._id} id={"false" + question._id}
                value={(question.trueFalse) ? 0 : question.points}
                checked={(!question.trueFalse && correct) || (question.trueFalse && !correct)}
                />
            <label htmlFor={"false" + question._id}>False</label>
            <br />
        </div>
    )
}