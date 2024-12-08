import { useSelector } from "react-redux";
import QuizDetailsFaculty from "./DetailsFaculty";
import { useParams } from "react-router";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div>

            {(currentUser.role === 'FACULTY' || currentUser.role === 'ADMIN') &&
                <QuizDetailsFaculty />}
            {(currentUser.role === 'STUDENT') &&
                <div className="text-center">
                    <a href={"#/Courses/" + cid + "/Quizzes/preview/" + qid}
                        className="btn btn-secondary">
                        Start Quiz</a>
                </div>}
        </div>
    )
}