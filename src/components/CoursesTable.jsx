import React from "react";

const CoursesTable = ({ courses, deleteCourse, setSelectedCourse }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Courses</h2>
            {courses.length === 0 ? (
                <p>No courses available. Add a course to get started.</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Start Date</th>
                            <th className="border px-4 py-2">End Date</th>
                            <th className="border px-4 py-2">Teacher</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id}>
                                <td className="border px-4 py-2">{course.title}</td>
                                <td className="border px-4 py-2">{course.description}</td>
                                <td className="border px-4 py-2">{course.startDate}</td>
                                <td className="border px-4 py-2">{course.endDate}</td>
                                <td className="border px-4 py-2">{course.assignedTeacher}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => setSelectedCourse(course)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteCourse(course.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CoursesTable;
