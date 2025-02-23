import axios from "axios";

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