import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/authContext.jsx";

const LeaveList = () => {
  const { user } = useAuth();
  const [leaves, setLeaves] = useState([]);
  let sno = 1;


  const fetchLeaves = async () => {
    try {
      console.log(user);
      const response = await axios.get(
        `http://localhost:3000/api/leave/${user._id}`,
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );


      if (response.data.success) {
        setLeaves(response.data.leaves);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Leaves</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by dep Name"
          className="px-4 py-0.5 border"
        />
        <Link
          to="/employee-dashboard/add-leave"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Add new Leave
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercasse bg-gray-50 border border-gray-200">
          <tr>
            <th className="px-6 py-3">SNO</th>
            <th className="px-6 py-3">Leave type</th>
            <th className="px-6 py-3">from</th>
            <th className="px-6 py-3">To</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr
              key={leave._id}
              className="bg-white"
            >
              <td className="px-6 py-3">{sno++}</td>
              <td className="px-6 py-3">{leave.leaveType}</td>
              <td className="px-6 py-3">
                {new Date(leave.startDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-3">
                {new Date(leave.endDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-3">{leave.reason}</td>
              <td className="px-6 py-3">{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveList;
