import { useState } from "react";

export default function ResultTrueFalse({ question, answers }:
    {
        question: any,
        answers: any,
    }) {

    const getAnswer = (result: string) => {
        try {
            return answers[question._id] == result;
        } catch (error) {
            return false
        }
    }
    return (
        <div>
            <input type="radio" name={question._id} id={"true" + question._id}
                checked={getAnswer("true")} />

            <label htmlFor={"true" + question._id}>True</label>
            <br />

            <input type="radio" name={question._id} id={"false" + question._id}
                checked={getAnswer("false")}
            />
            <label htmlFor={"false" + question._id}>False</label>
            <br />
        </div>
    )
}