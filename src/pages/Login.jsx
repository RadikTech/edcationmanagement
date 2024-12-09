import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock authentication
        if (credentials.username === "admin" && credentials.password === "admin") {
            login({ username: "Admin User", role: "admin" });
            navigate("/admin");

        } else if (credentials.username === "teacher" && credentials.password === "teacher") {
            login({ username: "Teacher User", role: "teacher" });
            navigate("/teacher");

        } else if (credentials.username === "student" && credentials.password === "student") {
            login({ username: "Student User", role: "student" });
            navigate("/student");

        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm">

                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block font-bold mb-2">Username</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        value={credentials.username}
                        onChange={(e) =>
                            setCredentials({ ...credentials, username: e.target.value })
                        }
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">Password</label>
                    <input
                        type="password"
                        className="border rounded w-full p-2"
                        value={credentials.password}
                        onChange={(e) =>
                            setCredentials({ ...credentials, password: e.target.value })
                        }
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
