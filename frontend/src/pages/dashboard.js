import React from "react";
import Navbar from "../components/navbar";

function Dashboard() {
  return (
    <div className="bg-gray-300 w-full flex max-h-screen">
      <div className="absolute">
        <Navbar />
      </div>
    </div>
  );
}

export default Dashboard;
