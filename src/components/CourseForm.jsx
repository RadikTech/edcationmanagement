import React, { useEffect, useState } from "react";

const CourseForm = ({ selectedCourse, setSelectedCourse, addCourse, updateCourse }) => {
    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        assignedTeacher: "",
    });

    useEffect(() => {
        if (selectedCourse) {
            setFormValues(selectedCourse);
        }
    }, [selectedCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedCourse) {
            updateCourse(formValues);
            setSelectedCourse(null);
        } else {
            addCourse(formValues);
        }
        setFormValues({
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            assignedTeacher: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">{selectedCourse ? "Edit Course" : "Add Course"}</h2>

            <input
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                placeholder="Course Title"
                className="w-full p-2 border mb-3 rounded"
                required
            />
            <textarea
                name="description"
                value={formValues.description}
                onChange={handleChange}
                placeholder="Course Description"
                className="w-full p-2 border mb-3 rounded"
                required
            />
            <input
                type="date"
                name="startDate"
                value={formValues.startDate}
                onChange={handleChange}
                className="w-full p-2 border mb-3 rounded"
                required
            />
            <input
                type="date"
                name="endDate"
                value={formValues.endDate}
                onChange={handleChange}
                className="w-full p-2 border mb-3 rounded"
                required
            />
            <input
                type="text"
                name="assignedTeacher"
                value={formValues.assignedTeacher}
                onChange={handleChange}
                placeholder="Assigned Teacher"
                className="w-full p-2 border mb-3 rounded"
                required
            />

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                {selectedCourse ? "Update Course" : "Add Course"}
            </button>
            {selectedCourse && (
                <button
                    type="button"
                    className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    onClick={() => setSelectedCourse(null)}
                >
                    Cancel
                </button>
            )}
        </form>
    );
};

export default CourseForm;
