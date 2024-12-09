import React, { useState, useEffect } from "react";
import EnrolledCourses from "../components/EnrolledCourses";
import AssignmentSubmission from "../components/AssignmentSubmission";
import GradesView from "../components/GradesView";

const StudentDashboard = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Dummy data for courses, assignments, and grades
    const dummyCourses = [
        { id: 1, title: "Math 101", description: "Basic Math", assignments: [1, 2], students: [1, 2] },
        { id: 2, title: "Physics 201", description: "Physics Basics", assignments: [3, 4], students: [3, 4] },
    ];

    const dummyAssignments = [
        { id: 1, title: "Math Assignment 1", dueDate: "2024-12-10", courseId: 1 },
        { id: 2, title: "Math Assignment 2", dueDate: "2024-12-15", courseId: 1 },
        { id: 3, title: "Physics Quiz", dueDate: "2024-12-20", courseId: 2 },
    ];

    const dummyGrades = [
        { studentId: 1, courseId: 1, grade: 85 },
        { studentId: 1, courseId: 2, grade: 90 },
    ];

    useEffect(() => {
        // Fetch enrolled courses (here we use dummy data)
        const storedCourses = JSON.parse(localStorage.getItem("studentCourses")) || dummyCourses;
        setEnrolledCourses(storedCourses);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <EnrolledCourses
                courses={enrolledCourses}
                setSelectedCourse={setSelectedCourse}
            />
            {selectedCourse && (
                <>
                    <AssignmentSubmission
                        courseId={selectedCourse.id}
                        assignments={dummyAssignments.filter(
                            (assignment) => assignment.courseId === selectedCourse.id
                        )}
                    />
                    <GradesView
                        courseId={selectedCourse.id}
                        grades={dummyGrades.filter((grade) => grade.courseId === selectedCourse.id)}
                    />
                </>
            )}
        </div>
    );
};

export default StudentDashboard;
