import React, { useState } from "react";

const CourseContentManager = ({ courseId }) => {
    const [content, setContent] = useState([]);

    const uploadContent = (e) => {
        const file = e.target.files[0];
        if (file) {
            setContent([...content, { name: file.name, id: Date.now() }]);
        }
    };

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Manage Course Content</h2>
            <input
                type="file"
                onChange={uploadContent}
                className="p-2 border mb-4 rounded w-full"
            />
            <ul>
                {content.map((item) => (
                    <li key={item.id} className="p-2 border-b">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseContentManager;
