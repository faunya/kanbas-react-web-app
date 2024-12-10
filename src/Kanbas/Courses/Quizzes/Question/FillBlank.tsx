import { useState } from "react"
import { FaPlus, FaTrash } from "react-icons/fa";

export default function FillBlank({ question, setQuestion }: {
    question: any,
    setQuestion: (question: any) => void
}) {
    const [choices, setChoices] = useState(question.blankAns)
    const newChoiceTemplate = {
        "_id": new Date().getTime(),
        "answer": ""
    }
    const addNewChoice = () => {
        const newChoices = [...choices, newChoiceTemplate]
        updateChoices(newChoices)
    }

    const updateChoices = (newChoices: any) => {
        setChoices(newChoices);
        setQuestion({ ...question, blankAns: newChoices });
    }

    const deleteChoice = (choice: any) => {
        const newChoices = choices.filter((c: any) => (c._id != choice._id));
        updateChoices(newChoices);
    }

    return (
        <div className="m-3">
            {choices.map(
                (choice: any) => (
                    <div className="row m-2">
                        <div className="col-sm-3">
                            <label htmlFor="wd-answer">Possible Answer: </label>
                        </div>
                        <div className="col-lg-8">
                            <input id="wd-answer" type="input" className="form-control"
                                defaultValue={choice.answer}
                                placeholder="Answer"
                                onChange={(e) => {
                                    choices.find((c: any) => c._id === choice._id)
                                        .answer = e.target.value;
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
            </div></div>
    )
}