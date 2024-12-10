import { useState } from "react"
import { FaPlus, FaTrash } from "react-icons/fa";

export default function MultiChoice({ question, setQuestion }: {
    question: any,
    setQuestion: (question: any) => void
}) {
    const [choices, setChoices] = useState(question.choices)
    const newChoiceTemplate = {
        "_id": new Date().getTime(),
        "answer": "",
        "correct": false
    };

    const updateChoices = (newChoices: any[]) => {
        setChoices(newChoices);
        setQuestion({ ...question, choices: newChoices });
    }

    const addNewChoice = () => {
        const newChoices = [...choices, newChoiceTemplate]
        updateChoices(newChoices);
    }

    const updateCorrect = (correctChoice: any) => {
        const incorrectChoices = choices
            .filter((c: any) => (c._id != correctChoice._id))

        const falseChoices = incorrectChoices.map((c: any) => {
            c.correct = false;
        });
        const newChoices = incorrectChoices.push(correctChoice);
        console.log(correctChoice);
        //updateChoices(newChoices);

    }

    const deleteChoice = (choice: any) => {
        const newChoices = choices.filter((c: any) => (c._id != choice._id));
        updateChoices(newChoices);
    }

    return (
        <div className="m-3">
            {choices.map(
                (choice: any) => (
                    <div className="row">
                        <div className="col-sm-3">
                            <label htmlFor="wd-answer">Possible Answer: </label>
                        </div>

                        <div className="col-lg-6">
                            <input id="wd-answer" type="input" className="form-control"
                                defaultValue={choice.answer}
                                placeholder="Answer"
                                onChange={(e) => {
                                    choices.find((c: any) => c._id === choice._id)
                                        .answer = e.target.value;
                                    console.log(choices)
                                }
                                } />
                        </div>

                        <div className="col-sm-2">
                            <label htmlFor="wd-correct">Correct: </label>
                            <input className="form-check-input m-2" type="radio" name="wd-correct" defaultChecked={choice.correct}
                                onChange={(e) => {
                                    choices.find((c: any) => c._id === choice._id)
                                        .correct = e.target.checked;
                                    //console.log(choices);
                                    updateCorrect(choices.find((c: any) => c._id === choice._id));
                                }} />
                        </div>

                        <div className="col-sm-1">
                            <FaTrash className="text-danger m-1 float-end"
                                onClick={() => (deleteChoice(choice))} />
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