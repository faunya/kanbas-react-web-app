import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const { quizzes } = useSelector((state: any) => state.quizReducer);

    const lookup = quizzes.filter((quiz: any) => quiz._id === qid)[0];
    const [quiz, setQuiz] = useState(lookup ||
    {
        "title": "New Quiz",
        "quizType": "Graded Quiz",
        "course": cid,
        "points": 100,
        "assignmentGroup": "Quizzes",
        "shuffle": true,
        "timeLimit": 20,
        "multiAttempt": false,
        "numAttempt": 1,
        "showCorrectAnswers": true,
        "accessCode": "",
        "oneQuestAtTime": true,
        "webcam": false,
        "lockQuestions": false,
        "dueDate": "2025-01-01",
        "availableDate": "2025-01-01",
        "untilDate": "2025-01-01",
    });

    return (
        <div>

            {(currentUser.role === 'FACULTY' || currentUser.role === 'ADMIN') &&
                <div className="d-flex justify-content-center">
                    <a className="btn btn-secondary text-center m-1"
                        href={"#/Kanbas/Courses/" + cid + "/Quizzes/preview/" + qid}>Preview</a>
                    <a className="btn btn-secondary text-center m-1" 
                    href={"#/Kanbas/Courses/" + cid + "/Quizzes/edit/" + qid}><FaPencil /> Edit</a>
                </div>}

            {(currentUser.role === 'STUDENT') &&
                <div className="text-center">
                    <a href={"#/Kanbas/Courses/" + cid + "/Quizzes/preview/" + qid}
                        className="btn btn-secondary">
                        Start Quiz</a>
                </div>}

            <hr />
            <h2>{quiz.title}</h2>
            <div>
                <div className="row">
                    <div className="text-end d-inline-block col"><b>Quiz Type</b></div>
                    <div className="text-start d-inline-block col">{quiz.quizType}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Points</b></div>
                    <div className="text-start col">{quiz.points}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Assignment Group</b></div>
                    <div className="text-start col">{quiz.assignmentGroup}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Shuffle Answers</b></div>
                    <div className="text-start col">{quiz.shuffle ? "Yes" : "No"}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Time Limit</b></div>
                    <div className="text-start col">{quiz.timeLimit}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Multiple Attemps</b></div>
                    <div className="text-start col">{quiz.multiAttempt ? "Yes" : "No"}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Number of Attempts</b></div>
                    <div className="text-start col">{quiz.numAttempt}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Show Correct Answers</b></div>
                    <div className="text-start col">{quiz.showCorrectAnswers ? "Yes" : "No"}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Access Code</b></div>
                    <div className="text-start col">{quiz.accessCode}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>One Question at a Time</b></div>
                    <div className="text-start col">{quiz.oneQuestAtTime ? "Yes" : "No"}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Webcam Required</b></div>
                    <div className="text-start col">{quiz.webcam ? "Yes" : "No"}</div>
                </div>

                <div className="row">
                    <div className="text-end col"><b>Lock Questions after Answering</b></div>
                    <div className="text-start col">{quiz.lockQuestions ? "Yes" : "No"}</div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Due</th>
                        <th scope="col">Available from</th>
                        <th scope="col">Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{quiz.dueDate.slice(0,10)}</td>
                        <td>{quiz.availableDate.slice(0,10)}</td>
                        <td>{quiz.untilDate.slice(0,10)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}