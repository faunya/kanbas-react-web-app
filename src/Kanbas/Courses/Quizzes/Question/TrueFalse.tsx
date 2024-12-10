export default function TrueFalse({ question, setQuestion }: {
    question: any,
    setQuestion: (question: any) => void
}) {
    return (
        <div className="m-3">
            <label className="m-2" htmlFor="trueFalseCheck">Check is true, unchecked is false</label>
            <input id="trueFalseCheck" type="checkbox" className="form-check-input m-3" defaultChecked={question.trueFalse}
                onChange={(e) => {
                    setQuestion({ ...question, trueFalse: e.target.checked })
                }} />
        </div>
    )
}