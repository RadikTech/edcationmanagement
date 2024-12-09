import React, { useState } from "react";

const AssignmentSubmission = ({ courseId, assignments }) => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);

    const handleFileUpload = (assignmentId, file) => {
        setSubmittedAssignments((prev) => [
            ...prev,
            { assignmentId, fileName: file.name, submittedAt: new Date().toISOString() },
        ]);
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
            {assignments.length === 0 ? (
                <p>No assignments for this course.</p>
            ) : (
                <ul>
                    {assignments.map((assignment) => (
                        <li key={assignment.id} className="p-2 border-b">
                            <h3 className="font-semibold">{assignment.title}</h3>
                            <p>Due Date: {assignment.dueDate}</p>
                            <input
                                type="file"
                                onChange={(e) =>
                                    handleFileUpload(assignment.id, e.target.files[0])
                                }
                                className="p-2 border mt-2"
                            />
                            {submittedAssignments
                                .filter((sub) => sub.assignmentId === assignment.id)
                                .map((sub, idx) => (
                                    <p key={idx} className="mt-2 text-green-500">
                                        Submitted: {sub.fileName}
                                    </p>
                                ))}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AssignmentSubmission;
