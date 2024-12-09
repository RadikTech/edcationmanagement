import React, { useState } from "react";

const GradeManager = ({ courseId, students, setTeacherCourses }) => {
    const [grades, setGrades] = useState(
        students.reduce((acc, student) => {
            acc[student.id] = student.grades[courseId] || 0;
            return acc;
        }, {})
    );

    const handleGradeChange = (studentId, grade) => {
        setGrades({ ...grades, [studentId]: grade });
    };

    const saveGrades = () => {
        alert("Grades saved successfully!");
        // Logic to save grades (to backend/localStorage)
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h2 className="text-xl font-bold mb-4">Manage Grades</h2>
            {students.length === 0 ? (
                <p>No students to grade.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Student Name</th>
                            <th className="border px-4 py-2">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td className="border px-4 py-2">{student.name}</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        value={grades[student.id]}
                                        onChange={(e) =>
                                            handleGradeChange(student.id, e.target.value)
                                        }
                                        className="p-2 border rounded"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button
                onClick={saveGrades}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            >
                Save Grades
            </button>
        </div>
    );
};

export default GradeManager;
