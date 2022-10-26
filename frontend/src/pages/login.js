import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundlogin from "../assets/Background-Login.png";

function Login() {

  
  return (
    <div className="relative w-full h-screen flex items-center bg-cover">
      <img
        src={backgroundlogin}
        className="absolute w-full h-full object-cover"
      />
      <div className="w-1/4 p-6 m-auto bg-red-900 rounded-2xl drop-shadow-lg">
        <h1 className="mt-6 text-5xl font-bold italic text-center text-gray-50">
          dexa group
        </h1>
        <form className="mt-6 mb-6">
          <div>
            <label
              className="block text-base font-medium text-gray-50"
              htmlFor="Nama Pengguna"
            >
              Nama Pengguna
            </label>
            <input
              className="block w-full p-3 text-gray-500 bg-gray-50 border rounded-md focus:border-gray-50"
              type="text"
              placeholder="Nama Pengguna"
            />
          </div>
          <div>
            <label
              className="block text-base font-medium text-gray-50"
              htmlFor="Kata Sandi"
            >
              Kata Sandi
            </label>
            <input
              className="block w-full p-3 text-gray-500 bg-gray-50 border rounded-md focus:border-gray-50"
              type="password"
              placeholder="Kata Sandi"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                className="w-4 h-4 text-gray-50 border rounded focus:border-gray-50"
                type="checkbox"
              />
              <label
                className="ml-1 text-sm font-base text-gray-50"
                htmlFor="Ingat Saya"
              >
                Ingat Saya
              </label>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-sm font-semibold text-orange-600 hover:underline text-orange-500"
              >
                Lupa Kata Sandi?
              </a>
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full p-3 tracking-wide text-gray-50 font-bold transition-colors duration-200 transform bg-orange-600 rounded-full hover:bg-orange-500">
              Masuk
            </button>
          </div>
        </form>
        <p className="mt-6 mb-6 text-sm text-center text-gray-50">
          Belum memiliki Akun?{" "}
          <a className="font-semibold text-orange-600 hover:underline text-orange-500">
            <Link to="/register">Daftar Akun</Link>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
