import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchDepartments = async () => {
        
    let departments = null;
      try {
        const response = await axios.get(
          "http://localhost:3000/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log(response.data);
          if (response.data.success) {
            
              departments = response.data.departments
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    
    return departments
};

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "90px",
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    width: "150px",
  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width: "120px",
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
    sortable: true,
    width: "120px",
  },
  {
    name: "Action",
      selector: (row) => row.action,
    center: "true",
  },
];
    

export const EmployeeButtons = ({ _id }) => {
  const navigate = useNavigate();

//   const handleDelete = async (_id) => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this department?"
//     );
//     if (!confirm) return;
//     try {
//       const response = await axios.delete(
//         `http://localhost:3000/api/department/${_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         onDepartmentDelete(_id);
//       }
//     } catch (error) {
//       if (error.response && !error.response.data.success) {
//         alert(error.response.data.error);
//       }
//     }
//   };
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/employees/${_id}`)}
      >
        View
      </button>
      <button className="px-3 py-1 bg-green-600 text-white" onClick={() => navigate(`/admin-dashboard/employees/edit/${_id}`)}>Edit</button>
      <button className="px-3 py-1 bg-yellow-600 text-white">Salary</button>
      <button className="px-3 py-1 bg-red-600 text-white">Leave</button>
    </div>
  );
};