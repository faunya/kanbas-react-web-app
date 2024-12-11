import parse from 'html-react-parser';
import PreviewMultiChoice from "./PreviewMultiChoice";
import PreviewTrueFalse from "./PreviewTrueFalse";
import PreviewFillBlank from "./PreviewFillBlank";
import ResultMultiChoice from './ResultMultiChoice';
import ResultTrueFalse from './ResultTrueFalse';

export default function QuestionResult({ question, scores, setScores, answers, setAnswers }:
    {
        question: any,
        scores: any,
        setScores: (score: any) => void,
        answers: any,
        setAnswers: (score: any) => void,
    }) {

    return (
        <div className="m-3 form" id="question">
            <div className={(answers[question._id] ? "green-border" : "red-border") + " m-2 p-2 mb-0"}>
                <span className="m-1 p-2"><b>{question.title}</b></span>

                <span className="me-2 float-end">{question.points} pts</span>
            </div>

            <div className={(answers[question._id] ? "green-border" : "red-border")
                + " mt-0 m-2 no-top-border p-3"}>
                <div className="mb-3"><span>{parse(question.question)}</span></div>

                {(question.questType === "MULTIPLE CHOICE") ? <ResultMultiChoice question={question}
                    answers={answers} correct={answers[question._id]} />

                    : ((question.questType === "TRUE FALSE") ? <ResultTrueFalse question={question}
                    answers={answers} correct={answers[question._id]} /> :
                        //Fill in blank
                        <PreviewFillBlank question={question}
                            scores={scores} setScores={setScores}
                            answers={answers} setAnswers={setAnswers} />
                    )}


            </div>


        </div>
    )
}