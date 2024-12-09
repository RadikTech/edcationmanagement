import React from "react";

const GradesView = ({ courseId, grades }) => {
    const studentGrade = grades.find((grade) => grade.courseId === courseId);

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Grades</h2>
            {studentGrade ? (
                <div>
                    <p className="font-semibold">Grade: {studentGrade.grade}%</p>
                </div>
            ) : (
                <p>No grades available for this course.</p>
            )}
        </div>
    );
};

export default GradesView;
