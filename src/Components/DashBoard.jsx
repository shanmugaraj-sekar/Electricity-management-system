// Dashboard.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DataChart from "./Chart";
import DataTable from "./Table";
import Filter from "./Filter";

export default function Dashboard({ Data }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex h-full flex-col   bg-white  text-black m-4 rounded">
        <div className="flex items-center justify-between shadow">
          <div>
            <Filter />
          </div>
          <div className="bg-slate-500  m-3 p-3 mr-20 h-12">
            <Link to="chart" className="bg-gray-200 p-2 m-1">
              Chart
            </Link>
            <Link to="table" className="bg-gray-200 p-2 m-1">
              Table
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="chart" element={<DataChart />} />
          <Route path="table" element={<DataTable />} />
        </Routes>
      </div>
    </div>
  );
}
