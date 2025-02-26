import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard.jsx"
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RoleBasedRoutes from "./utils/RoleBasedRoutes.jsx";
import AdminSummary from "./components/dashboard/AdminSummary.jsx";
import DepartmentList from "./components/departments/DepartmentList.jsx";
import AddDepartment from "./components/departments/AddDepartment.jsx";
import EditDepartment from "./components/departments/EditDepartment.jsx";
import EmployeeList from "./components/employee/EmployeeList.jsx";
import Add from "./components/employee/Add.jsx";
import EmployeeView from "./components/employee/EmployeeView.jsx";
import EmployeeEdit from "./components/employee/EmployeeEdit.jsx";
import SalaryList from "./components/salary/SalaryList.jsx";
import EmployeeSummary from "./components/employeeDashboard/EmployeeSummary.jsx";
import EmployeeSalary from "./components/employeeDashboard/EmployeeSalary.jsx";
import EmployeeLeave from "./components/employeeDashboard/EmployeeLeave.jsx";
import EmployeeSettings from "./components/employeeDashboard/EmployeeSettings.jsx";

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary />}></Route>
          <Route
            path="/admin-dashboard/departments"
            element={<DepartmentList />}
          ></Route>
          <Route
            path="/admin-dashboard/salary"
            element={<SalaryList />}
          ></Route>
          <Route
            path="/admin-dashboard/add-department"
            element={<AddDepartment />}
          ></Route>
          <Route
            path="/admin-dashboard/department/:id"
            element={<EditDepartment />}
          ></Route>
          <Route
            path="/admin-dashboard/employees"
            element={<EmployeeList />}
          ></Route>
          <Route
            path="/admin-dashboard/employees/:id"
            element={<EmployeeView />}
          ></Route>
          <Route
            path="/admin-dashboard/employees/edit/:id"
            element={<EmployeeEdit />}
          ></Route>
          <Route path="/admin-dashboard/add-employee" element={<Add />}></Route>
        </Route>

        <Route
          path="/employee-dashboard"
          element={
            <PrivateRoutes>
              <RoleBasedRoutes requiredRole={["admin", "employee"]}>
                <EmployeeDashboard />
              </RoleBasedRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<EmployeeSummary />}></Route>
          <Route
            path="/employee-dashboard/profile/:id"
            element={<EmployeeView />}
          ></Route>
          <Route
            path="/employee-dashboard/salary"
            element={<EmployeeSalary />}
          ></Route>
          <Route
            path="/employee-dashboard/leaves"
            element={<EmployeeLeave />}
          ></Route>
          <Route
            path="/employee-dashboard/settings"
            element={<EmployeeSettings />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
