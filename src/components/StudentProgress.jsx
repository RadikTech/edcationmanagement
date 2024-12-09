import React from "react";

const StudentProgress = ({ courseId, students }) => {
    const courseStudents = students.filter((student) =>
        Object.keys(student.grades).includes(String(courseId))
    );

    return (
        <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h2 className="text-xl font-bold mb-4">Student Progress</h2>
            {courseStudents.length === 0 ? (
                <p>No students enrolled in this course.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Student Name</th>
                            <th className="border px-4 py-2">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseStudents.map((student) => (
                            <tr key={student.id}>
                                <td className="border px-4 py-2">{student.name}</td>
                                <td className="border px-4 py-2">{student.grades[courseId]}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default StudentProgress;
