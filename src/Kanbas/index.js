import axios from "axios";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

import store from "./store";

import "./KanbasNavigation/nav.css"; // optionally import CSS files as needed

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );

    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    console.log(course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (

    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />} />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />
            <Route path="Courses/" element={<Navigate to="RS101" />} />
          </Routes>
        </div>
      </div>

    </Provider>
  );
}
export default Kanbas