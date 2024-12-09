import { useState } from "react"

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

    return (
        <div className="m-3">
            {choices.map(
                (choice: any) => (
                    <div className="row">
                        <div className="col-lg">
                            <input id="wd-name" type="input" className="form-control"
                                defaultValue={question.title}
                                placeholder="Title"
                                onChange={(e) =>
                                    setQuestion({ ...question, title: e.target.value })} />
                        </div>
                    </div>
                )

            )}
            <div className="text-end m-2">
                <a>+ Add new answer</a>
            </div>
        </div>
    )
}