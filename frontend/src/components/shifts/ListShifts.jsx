import React from 'react'
import { Link } from "react-router-dom";

const ListShifts = () => {

    return (
      <div className="p-5">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Manage Shifts</h3>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by employee"
            className="px-4 py-0.5 border"
            // onChange={handleFilter}
          />
          <Link
            to="/admin-dashboard/add-shift"
            className="px-4 py-1 bg-teal-600 rounded text-white"
          >
            Add new Shift
          </Link>
        </div>
        {/* <div>
          <DataTable columns={columns} data={} pagination />
        </div> */}
      </div>
    );
}

export default ListShifts