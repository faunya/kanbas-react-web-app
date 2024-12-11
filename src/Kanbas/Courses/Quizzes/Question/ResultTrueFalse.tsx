import { useState } from "react";

export default function ResultTrueFalse({ question, answers }:
    {
        question: any,
        answers: any,
    }) {

    
  
    return (
        <div>
            <input type="radio" name={question._id} id={"true" + question._id}
                checked={answers[question._id] === "true"} />
            <label htmlFor={"true" + question._id}>True</label>
            <br />

            <input type="radio" name={question._id} id={"false" + question._id}
                checked={answers[question._id] === "false"}
                />
            <label htmlFor={"false" + question._id}>False</label>
            <br />
        </div>
    )
}