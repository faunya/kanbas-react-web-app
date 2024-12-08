import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import * as quizzesClient from "./client";

import * as coursesClient from "../client";
import { useState } from "react";
import DefaultEditor, { Editor, EditorProvider } from "react-simple-wysiwyg";

export default function QuizEditorDetails({ quiz, setQuiz, createQuizForCourse, saveQuiz }:
    {
        quiz: any,
        setQuiz: (quiz: any) => void,
        createQuizForCourse: (quiz: any) => void,
        saveQuiz: (quiz: any) => void
    }
) {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);

    const lookup = quizzes.filter((quiz: any) => quiz._id === qid)[0];
    const [desc, setDesc] = useState(quiz.desc);

    return (
        <div id="wd-quizzes-editor">
            <div id="wd-css-responsive-forms-2">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="wd-name" className="col-form-label">
                            Quiz Name </label>
                        <div>
                            <input id="wd-name" type="input" className="form-control"
                                defaultValue={quiz.title}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, title: e.target.value })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div>
                            <DefaultEditor value={desc}
                                onChange={(e) => {
                                    setDesc(e.target.value);
                                    setQuiz({ ...quiz, desc: e.target.value });
                                }} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-quiz-type"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Quiz Type </label>

                        <div className="col-sm-5">
                            <select className="form-select" id="wd-quiz-type"
                                onChange={(e) =>
                                    setQuiz({ ...quiz, quizType: e.target.value })}>

                                <option selected={(quiz.quizType === "GRADED QUIZ"
                                    || (quiz.quizType === null))} value="GRADED QUIZ">Graded Quiz</option>

                                <option selected={quiz.quizType === "PRACTICE QUIZ"} value="PRACTICE QUIZ">Practice Quiz</option>
                                <option selected={quiz.quizType === "GRADED SURVEY"} value="GRADED SURVEY">Graded Survey</option>
                                <option selected={quiz.quizType === "UNGRADED SURVEY"} value="UNGRADED SURVEY">Ungraded Survey</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-points"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Points </label>

                        <div className="col-sm-5">
                            <input type="number" className="form-control"
                                id="wd-points" defaultValue={quiz.points}
                                onChange={(e) => {
                                    setQuiz({ ...quiz, points: e.target.value });
                                    console.log(quiz)
                                }} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-quiz-type"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Assignment Group </label>

                        <div className="col-sm-5">
                            <select className="form-select" id="wd-quiz-type"
                                onChange={(e) =>
                                    setQuiz({ ...quiz, assignmentGroup: e.target.value })}>

                                <option selected={(quiz.assignmentGroup === "QUIZZES"
                                    || (quiz.quizType === null))} value="QUIZZES">Quizzes</option>

                                <option selected={quiz.quizType === "EXAMS"} value="EXAMS">Exams</option>
                                <option selected={quiz.quizType === "ASSIGNMENTS"} value="ASSIGNMENTS">Assignments</option>
                                <option selected={quiz.quizType === "PROJECT"} value="PROJECT">Project</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Shuffle Answers </label>
                        <div className="col-sm-5">
                            <input className="form-check-input" type="checkbox" id="wd-shuffle-ans" defaultChecked={quiz.shuffle}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, shuffle: e.target.checked })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Time Limit </label>
                        <div className="col-sm-5">
                            <div className="col-sm-5">
                                <input className="form-check-input" type="checkbox" id="wd-enable-time"
                                    defaultChecked={quiz.timeLimit != -1 || quiz.timeLimit === null}
                                    onChange={(e) => {
                                        if (!e.target.checked) {
                                            setQuiz({ ...quiz, timeLimit: -1 });
                                        } else {
                                            setQuiz({ ...quiz, timeLimit: 20 });
                                        }
                                    }} />
                            </div>

                            <input id="wd-time-limit" type="number" className="form-control"
                                defaultValue={quiz.timeLimit}
                                placeholder="Minutes"
                                disabled={quiz.timeLimit === -1}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, timeLimit: e.target.value })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Multiple Attempts </label>
                        <div className="col-sm-5">
                            <input className="form-check-input" type="checkbox" id="wd-shuffle-ans"
                                defaultChecked={quiz.multiAttempt}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, multiAttempt: e.target.checked })} />

                            <input id="wd-time-limit" type="number" className="form-control"
                                defaultValue={quiz.numAttempt}
                                placeholder="Number of attempts"
                                onChange={(e) =>
                                    setQuiz({ ...quiz, numAttempt: e.target.value })}
                                disabled={!quiz.multiAttempt} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Show Correct Answers </label>
                        <div className="col-sm-5">
                            <input className="form-check-input" type="checkbox" id="wd-shuffle-ans"
                                defaultChecked={quiz.showCorrectAnswers}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, multiAttempt: e.target.checked })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-points"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Access Code </label>

                        <div className="col-sm-5">
                            <input type="text" className="form-control"
                                id="wd-access-code" defaultValue={quiz.accessCode}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, accessCode: e.target.value })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            One Question at a Time </label>
                        <div className="col-sm-5">
                            <input className="form-check-input" type="checkbox" id="wd-shuffle-ans" defaultChecked={quiz.showCorrectAnswers}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, multiAttempt: e.target.checked })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Webcam Required </label>
                        <div className="col-sm-5">
                            <input className="form-check-input" type="checkbox" id="wd-shuffle-ans" defaultChecked={quiz.showCorrectAnswers}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, multiAttempt: e.target.checked })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Lock Questions after Answering </label>
                        <div className="col-sm-5">
                            <input className="form-check-input" type="checkbox" id="wd-shuffle-ans" defaultChecked={quiz.showCorrectAnswers}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, multiAttempt: e.target.checked })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label
                            className="col-sm-5 col-form-label assign-edit-label">
                            Assign
                        </label>

                        <div className="col-sm-5" >

                            <div className="grey-border have-border p-3">

                                <label htmlFor="wd-due-date" className="form-label margin-10" style={{ fontWeight: "bold" }}>Due</label> <br />
                                <input type="date" defaultValue={quiz.dueDate} id="wd-due-date" className="form-control margin-10 "
                                    onChange={(e) =>
                                        setQuiz({ ...quiz, dueDate: e.target.value })} /><br />

                                <div className="row">
                                    <div className="col-sm-5" >
                                        <label htmlFor="wd-available-from" className="col-form-label">Available From</label>
                                        <input type="date" defaultValue={quiz.availableDate} id="wd-available-from" className="form-control"
                                            onChange={(e) =>
                                                setQuiz({ ...quiz, availableDate: e.target.value })} />
                                    </div>

                                    <div className="col-sm-5" >
                                        <label htmlFor="wd-available-until" className="col-form-label">Until</label>
                                        <input type="date" defaultValue={quiz.untilDate} id="wd-available-until" className="form-control"
                                            onChange={(e) =>
                                                setQuiz({ ...quiz, untilDate: e.target.value })} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
