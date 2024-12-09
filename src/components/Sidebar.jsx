import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
    const { user } = useAuth();

    const getLinks = () => {
        switch (user?.role) {
            case "admin":
                return [
                    { path: "/admin", label: "Dashboard" },
                    { path: "/admin/courses", label: "Manage Courses" },
                    { path: "/admin/users", label: "Manage Users" },
                ];
            case "teacher":
                return [
                    { path: "/teacher", label: "Dashboard" },
                    { path: "/teacher/courses", label: "My Courses" },
                    { path: "/teacher/students", label: "Student Progress" },
                ];
            case "student":
                return [
                    { path: "/student", label: "Dashboard" },
                    { path: "/student/courses", label: "My Courses" },
                    { path: "/student/assignments", label: "Assignments" },
                ];
            default:
                return [];
        }
    };

    const links = getLinks();

    return (
        <div className="bg-gray-800 text-white h-full w-64 py-4 px-6 fixed">
            <h2 className="text-2xl font-bold mb-6">EMS</h2>
            <ul className="space-y-4">
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className="block py-2 px-4 rounded hover:bg-gray-700"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
