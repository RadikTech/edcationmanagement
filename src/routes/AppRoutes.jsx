import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import TeacherDashboard from "../pages/TeacherDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const ProtectedRoute = ({ children, roles }) => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;
    if (roles && !roles.includes(user.role)) return <Navigate to="/not-found" />;
    return children;
};

const AppRoutes = () => (
    <>
        <Router>
            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute roles={["admin"]}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/teacher"
                    element={
                        <ProtectedRoute roles={["teacher"]}>
                            <TeacherDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/student"
                    element={
                        <ProtectedRoute roles={["student"]}>
                            <StudentDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    </>
);

export default AppRoutes;
