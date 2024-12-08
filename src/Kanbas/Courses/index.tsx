
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import * as client from "./client";

import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useEffect, useState } from "react";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizDetails from "./Quizzes/Details";

export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const course = courses.find((course) => course._id === cid);

    const [users, setUsers] = useState([]);

    const findUsersForCourse = async () => {
        const users = await client.findUsersForCourse(cid);
        setUsers(users);
    }

    useEffect(() => {
        findUsersForCourse();
    }, []);

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />{course && course.name} &gt; {pathname.split("/")[4]}
            </h2>

            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">

                    <CoursesNavigation />
                </div>
                <div className="flex-fill">

                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable users={users} />} />
                        <Route path="Quizzes" element={< Quizzes />} />
                        <Route path="Quizzes/edit/:qid/*" element={<QuizEditor />} />
                        <Route path="Quizzes/details/:qid" element={<QuizDetails />} />
                        <Route path="Quizzes/preview/:qid" element={<h1>Quiz preview</h1>} />
                    </Routes>

                </div>
            </div>
        </div >
    );
}
