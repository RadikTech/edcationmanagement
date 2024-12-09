import React, { useEffect, useState } from "react";
import AssignedCourses from "../components/AssignedCourses";
import StudentProgress from "../components/StudentProgress";
import GradeManager from "../components/GradeManager";
import CourseContentManager from "../components/CourseContentManager";

const TeacherDashboard = () => {
    const [teacherCourses, setTeacherCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Dummy data for courses and students
    const dummyCourses = [
        { id: 1, title: "Math 101", description: "Basic Math", students: [1, 2] },
        { id: 2, title: "Physics 201", description: "Physics Basics", students: [3, 4] },
    ];

    const dummyStudents = [
        { id: 1, name: "Alice", grades: { 1: 85, 2: 90 } },
        { id: 2, name: "Bob", grades: { 1: 78, 2: 88 } },
        { id: 3, name: "Charlie", grades: { 1: 92, 2: 81 } },
        { id: 4, name: "Diana", grades: { 1: 89, 2: 76 } },
    ];

    // Load assigned courses for the teacher
    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem("teacherCourses")) || dummyCourses;
        setTeacherCourses(storedCourses);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
            <AssignedCourses
                courses={teacherCourses}
                setSelectedCourse={setSelectedCourse}
            />
            {selectedCourse && (
                <>
                    <StudentProgress courseId={selectedCourse.id} students={dummyStudents} />
                    <GradeManager
                        courseId={selectedCourse.id}
                        students={dummyStudents}
                        setTeacherCourses={setTeacherCourses}
                    />
                    <CourseContentManager courseId={selectedCourse.id} />
                </>
            )}
        </div>
    );
};

export default TeacherDashboard;
