import React, { useEffect, useState } from "react";
import CourseForm from "../components/CourseForm";
import CoursesTable from "../components/CoursesTable";

const AdminDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Load courses from localStorage
    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
        setCourses(storedCourses);
    }, []);

    // Save courses to localStorage
    const saveToLocalStorage = (updatedCourses) => {
        localStorage.setItem("courses", JSON.stringify(updatedCourses));
    };

    const addCourse = (newCourse) => {
        const updatedCourses = [...courses, { id: Date.now(), ...newCourse }];
        setCourses(updatedCourses);
        saveToLocalStorage(updatedCourses);
    };

    const updateCourse = (updatedCourse) => {
        const updatedCourses = courses.map((course) =>
            course.id === updatedCourse.id ? updatedCourse : course
        );
        setCourses(updatedCourses);
        saveToLocalStorage(updatedCourses);
    };

    const deleteCourse = (id) => {
        const updatedCourses = courses.filter((course) => course.id !== id);
        setCourses(updatedCourses);
        saveToLocalStorage(updatedCourses);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

            <div className="grid grid-cols-1 gap-6">
                <CourseForm
                    selectedCourse={selectedCourse}
                    setSelectedCourse={setSelectedCourse}
                    addCourse={addCourse}
                    updateCourse={updateCourse}
                />
                <CoursesTable
                    courses={courses}
                    deleteCourse={deleteCourse}
                    setSelectedCourse={setSelectedCourse}
                />
            </div>
        </div>
    );
};

export default AdminDashboard;
