import React from "react";
import backgroundlogin from "../assets/Background-Login.png";

function Login() {
  return (
    <div className="relative w-full h-screen flex items-center bg-cover">
      <img
        src={backgroundlogin}
        className="absolute w-full h-full object-cover"
      />
      <div className="w-1/4 p-6 m-auto bg-red-900 rounded-md shadow-md z-10">
        <h1 className="text-4xl font-bold text-center text-gray-50">dexa group</h1>
      </div>
    </div>
  );
}

export default Login;
