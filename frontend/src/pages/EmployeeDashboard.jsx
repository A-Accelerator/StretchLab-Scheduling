import React from "react";
import Navbar from "../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";
import EmployeeSidebar from "../components/employeeDashboard/EmployeeSidebar";
import { useAuth } from "../context/authContext";

const EmployeeDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <EmployeeSidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
