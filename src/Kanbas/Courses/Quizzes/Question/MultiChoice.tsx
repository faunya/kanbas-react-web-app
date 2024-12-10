import { useState } from "react"
import { FaPlus } from "react-icons/fa";

export default function MultiChoice({ question, setQuestion }: {
    question: any,
    setQuestion: (question: any) => void
}) {
    const [choices, setChoices] = useState(question.choices)
    const newChoiceTemplate = {
        "id": new Date().getTime(),
        "answer": "",
        "correct": false
    };

    const addNewChoice = () => {
        setChoices([...choices, newChoiceTemplate]);
    }

    const updateQuestion = () => {
        setQuestion({...question, choices: choices})
    }

    return (
        <div className="m-3">
            {choices.map(
                (choice: any) => (
                    <div className="row m-2">
                        <div className="col-sm-3">
                            <label htmlFor="wd-answer">Possible Answer: </label>
                        </div>
                        <div className="col-lg">
                            <input id="wd-answer" type="input" className="form-control"
                                defaultValue={choice.answer}
                                placeholder="Answer"
                                onChange={(e) => (
                                    choices.find((c: any) => c._id === choice._id)
                                        .answer = e.target.value
                                )} />
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="wd-correct">Correct: </label>
                            <input className="form-check-input m-2" type="checkbox" id="wd-correct" defaultChecked={choice.correct}
                                onChange={(e) => (
                                    choices.find((c: any) => c._id === choice._id)
                                        .correct = e.target.checked
                                )} />


                        </div>
                    </div>
                )

            )}
            <div className="text-end m-2">
                <button className="btn btn-secondary" onClick={() => addNewChoice()}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Add new answer
                </button>
            </div>
        </div>
    )
}