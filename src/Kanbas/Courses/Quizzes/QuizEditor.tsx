import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import * as quizzesClient from "./client";

import * as coursesClient from "../client";
import { useState } from "react";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const lookup = quizzes.filter((quiz: any) => quiz._id === qid)[0];

    const [quiz, setQuiz] = useState(lookup ||
    {
        "title": "New Quiz",
        "course": cid,
        "points": 100,
    });

    const createQuizForCourse = async () => {
        if (!cid) return;
        const newQuiz = await coursesClient.createQuizForCourse(cid, quiz);
        dispatch(addQuiz(newQuiz));
    };

    const saveQuiz = async (quiz: any) => {
        await quizzesClient.updateQuiz(quiz);
        dispatch(updateQuiz(module));
    };

    return (
        <div id="wd-quizzes-editor">
            <div id="wd-css-responsive-forms-2">
                <div>
                    <span className="float-end">Points: {quiz.points} {quiz.published ? "Published" : "Not published"}</span>

                </div>
                <br /><hr />

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
                            <textarea className="form-control" rows={10} id="wd-description" onChange={(e) =>
                                setQuiz({ ...quiz, description: e.target.value })}>
                                {quiz.description}
                            </textarea>
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

                                <option selected={quiz.quizType === "GRADED QUIZ"} value="PRACTICE QUIZ">Practice Quiz</option>
                                <option selected={quiz.quizType === "GRADED QUIZ"} value="GRADED SURVEY">Graded Survey</option>
                                <option selected={quiz.quizType === "GRADED QUIZ"} value="UNGRADED SURVEY">Ungraded Survey</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-points"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Points </label>

                        <div className="col-sm-5">
                            <input type="text" className="form-control"
                                id="wd-points" defaultValue={quiz.points}
                                onChange={(e) =>
                                    setQuiz({ ...quiz, points: e.target.value })} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-quiz-type"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Assignment Group </label>

                        <div className="col-sm-5">
                            <select className="form-select" id="wd-quiz-type"
                                onChange={(e) =>
                                    setQuiz({ ...quiz, quizType: e.target.value })}>

                                <option selected={(quiz.quizType === "GRADED QUIZ"
                                    || (quiz.quizType === null))} value="GRADED QUIZ">Graded Quiz</option>

                                <option selected={quiz.quizType === "GRADED QUIZ"} value="PRACTICE QUIZ">Practice Quiz</option>
                                <option selected={quiz.quizType === "GRADED QUIZ"} value="GRADED SURVEY">Graded Survey</option>
                                <option selected={quiz.quizType === "GRADED QUIZ"} value="UNGRADED SURVEY">Ungraded Survey</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-group"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Quiz Group </label>
                        <div className="col-sm-5">
                            <select id="wd-group" className="form-control">
                                <option selected>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="wd-display-grade-as"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Display Grade as
                        </label>

                        <div className="col-sm-5">
                            <select id="wd-display-grade-as" className="form-control">
                                <option selected>Percentage</option>
                            </select>
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label htmlFor="wd-submission-type"
                            className="col-sm-5 col-form-label assign-edit-label">
                            Submission Type </label>

                        <div className="col-sm-5" >
                            <div className="grey-border have-border p-3">
                                <select id="wd-submission-type" className="form-control">
                                    <option selected>Online</option>
                                </select>

                                <p className="margin=10" style={{ fontWeight: "bold", marginLeft: "10px" }}>
                                    Online Entry Options<br />
                                </p>

                                <input type="checkbox" name="check-entry" id="wd-text-entry" className="form-check-input margin-10" />
                                <label htmlFor="wd-text-entry" className="col-form-label">Text Entry</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-website-url" className="form-check-input margin-10" />
                                <label htmlFor="wd-website-url" className="col-form-label">Website URL</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-media-recordings" className="form-check-input margin-10" />
                                <label htmlFor="wd-media-recordings" className="col-form-label">Media Recordings</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-student-annotation" className="form-check-input margin-10" />
                                <label htmlFor="wd-student-annotation" className="col-form-label">Student Annotation</label> <br />

                                <input type="checkbox" name="check-entry" id="wd-file-upload" className="form-check-input margin-10" />
                                <label htmlFor="wd-file-upload" className="col-form-label">File Uploads</label>
                            </div>

                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label
                            className="col-sm-5 col-form-label assign-edit-label">
                            Assign
                        </label>

                        <div className="col-sm-5" >

                            <div className="grey-border have-border p-3">
                                <label className="form-label margin-10" htmlFor="wd-assign-to" style={{ fontWeight: "bold" }} >Assign to</label><br />
                                <input className="form-control margin-10" value="Everyone" id="wd-assign-to" />

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
                                        <input type="date" defaultValue="2021-01-02" id="wd-available-until" className="form-control" />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                </form>
            </div>

            <hr />
            <button className="btn btn-danger float-end " onClick={() => {
                if (lookup) {
                    saveQuiz(quiz);
                } else {
                    createQuizForCourse();
                }
            }
            }>
                <a className="save-btn" href={"#/Kanbas/Courses/" + cid + "/Quizs"}>Save</a></button>
            <button className="btn btn-secondary float-end"><a className="cancel-btn" href={"#/Kanbas/Courses/" + cid + "/Quizs"}>Cancel</a></button>
        </div>
    );
}
