export default function PreviewMultiChoice({ question }: { question: any }) {
    return (
        <div>
            {question.choices.map((c : any) =>
                <div> {c.answer} </div>
            )}
        </div>
    )
}