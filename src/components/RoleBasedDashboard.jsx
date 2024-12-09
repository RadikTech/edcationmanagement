import React from "react";
import AdminDashboard from "../pages/AdminDashboard";
import TeacherDashboard from "../pages/TeacherDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import { useAuth } from "../context/AuthContext";

const RoleBasedDashboard = () => {
    const { user } = useAuth();

    if (!user) return <p className="text-center mt-10">No user logged in.</p>;

    switch (user.role) {
        case "admin":
            return <AdminDashboard />;
        case "teacher":
            return <TeacherDashboard />;
        case "student":
            return <StudentDashboard />;
        default:
            return <p className="text-center mt-10">Invalid role detected.</p>;
    }
};

export default RoleBasedDashboard;
