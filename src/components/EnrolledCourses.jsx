import React from "react";

const EnrolledCourses = ({ courses, setSelectedCourse }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
            {courses.length === 0 ? (
                <p>No courses enrolled.</p>
            ) : (
                <ul>
                    {courses.map((course) => (
                        <li
                            key={course.id}
                            className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                            onClick={() => setSelectedCourse(course)}
                        >
                            {course.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EnrolledCourses;
