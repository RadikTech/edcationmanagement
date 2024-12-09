import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ic_close from "../assets/ic_close.svg";
import ic_menu from "../assets/ic_menu.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold">
                    EMS
                </Link>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="block md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ?
                        <img src={ic_close} width={25} height={25} className="invert" /> :
                        <img src={ic_menu} width={25} height={25} className="invert"/>}
                </button>

                {/* Menu Links */}
                <div
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:flex items-center md:space-x-6 transition-transform duration-300 ${isOpen ? "block" : "hidden"
                        }`}
                >
                    {/* Role-Based Links */}
                    <ul className="md:flex md:items-center md:space-x-6">
                        {user?.role === "admin" && (
                            <>
                                <li>
                                    <Link to="/admin" className="block py-2 px-4 hover:bg-blue-700">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/courses" className="block py-2 px-4 hover:bg-blue-700">
                                        Manage Courses
                                    </Link>
                                </li>
                            </>
                        )}
                        {user?.role === "teacher" && (
                            <>
                                <li>
                                    <Link to="/teacher" className="block py-2 px-4 hover:bg-blue-700">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/teacher/students" className="block py-2 px-4 hover:bg-blue-700">
                                        Manage Students
                                    </Link>
                                </li>
                            </>
                        )}
                        {user?.role === "student" && (
                            <>
                                <li>
                                    <Link to="/student" className="block py-2 px-4 hover:bg-blue-700">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/student/courses" className="block py-2 px-4 hover:bg-blue-700">
                                        My Courses
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="block py-2 px-4 mt-2 md:mt-0 bg-red-500 rounded hover:bg-red-600 md:ml-6"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
