import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600 text-lg mt-4">Page Not Found</p>
        <Link
            to="/"
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
            Go Back Home
        </Link>
    </div>
);

export default NotFound;
