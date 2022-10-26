import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundRegist from "../assets/Background-Register.png";

function Regist() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNoTelepon] = useState("");
  const [checkedUsername, setCheckedUsername] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [checkedNumber, setCheckedNoTelepon] = useState("");
  const [second, setSeconds] = useState(0);
  const [disableButton, setDisable] = useState(false);
  const navigate = useNavigate();

  const validateUsername = (username) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(username)) {
      setCheckedUsername("");
      return true;
    } else {
      setCheckedUsername(
        "Nama Pengguna yang Anda masukkan tidak valid atau sudah terdaftar."
      );
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.lenght < 8) {
      setCheckedPassword(
        "Kata Sandi yang Anda masukkan kurang dari 8 karakter."
      );
      return false;
    } else {
      setCheckedPassword("");
      return true;
    }
  };

  const validateNoTelepon = (number) => {
    if (number.lenght < 11) {
      setCheckedNoTelepon("Nomor Telepon yang Anda masukkan tidak valid");
      return false;
    } else {
      setCheckedNoTelepon("");
      return true;
    }
  };

  const handleRegister = async (e) => {
    const usernameChecked = validateUsername(username);
    const passwordChecked = validatePassword(password);
    const numberChecked = validateNoTelepon(number);

    if (usernameChecked && passwordChecked && numberChecked) {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/user", {
          namapengguna: username,
          katasandi: password,
          nomortelepon: number,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (second > 0) {
      setDisable(true);
      setTimeout(() => setSeconds(second - 1), 1000);
    } else {
      setDisable(false);
    }
  }, [second]);

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={backgroundRegist} className="h-screen w-screen" />
      </div>
      <div className="bg-red-400 h-screen">
        <div className="w-1/2 p-6 mt-44 m-auto bg-red-900 rounded-2xl drop-shadow-lg">
          <h1 className="mt-6 text-5xl font-bold italic text-center text-gray-50">
            dexa group
          </h1>
          <p className="mt-6 text-sm text-center text-gray-50">
            {" "}
            Sudah memiliki Akun?{" "}
            <a className="font-semibold text-orange-600 hover:underline text-orange-500">
              <Link to="/">Masuk</Link>
            </a>
          </p>
          <form className="mt-6 mb-6" onSubmit={handleRegister}>
            <div>
              <label
                className="block text-base font-medium text-gray-50"
                htmlFor="Nama Pengguna"
              >
                Nama Pengguna
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="block w-full p-3 text-gray-500 bg-gray-50 border rounded-md focus:border-gray-50"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan Nama Pengguna"
              />
              {checkedUsername.length > 0 && (
                <p className="text-red-500">{checkedUsername}</p>
              )}
            </div>
            <div>
              <label
                className="block text-base font-medium text-gray-50"
                htmlFor="Kata Sandi"
              >
                Kata Sandi
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="block w-full p-3 text-gray-500 bg-gray-50 border rounded-md focus:border-gray-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Kata Sandi"
              />
              {checkedPassword.length > 0 && (
                <p className="text-red-500">{checkedPassword}</p>
              )}
            </div>
            <div>
              <label
                className="block text-base font-medium text-gray-50"
                htmlFor="No Telepon"
              >
                No.Telepon
              </label>
              <input
                id="number"
                type="number"
                name="number"
                className="block w-full p-3 text-gray-500 bg-gray-50 border rounded-md focus:border-gray-50"
                value={number}
                onChange={(e) => setNoTelepon(e.target.value)}
                placeholder="Masukkan No.Telepon"
              />
              {checkedNumber.length > 0 && (
                <p className="text-red-500">{checkedNumber}</p>
              )}
            </div>
            <div className="mt-6">
              <button className="w-full p-3 tracking-wide text-gray-50 font-bold transition-colors duration-200 transform bg-orange-600 rounded-full hover:bg-orange-500">
                Daftar
              </button>
            </div>
          </form>
          <p className="mt-6 mb-6 text-sm text-center text-gray-50">
            Dengan mendaftar, saya menyetujui{" "}
            <a className="font-semibold text-orange-600 hover:underline text-orange-500">
              <Link to="/#">Syarat dan Ketentuan</Link>
            </a>{" "}
            serta{" "}
            <a className="font-semibold text-orange-600 hover:underline text-orange-500">
              <Link to="/#">Kebijakan Privasi</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Regist;
