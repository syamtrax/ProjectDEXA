import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import axios from "axios";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/search?Provinsi=${search}`
    );
    setData(response.data);
  };

  return (
    <div className="flex flex-col w-full max-h-screen">
      <div className="absolute">
        <Navbar />
      </div>
      <div className="flex mt-20 h-full">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col bg-gray-200 w-full">
          <h1 className="font-bold text-5xl text-gray-900 mt-6 ml-6 mb-6">
            Dashboard
          </h1>
          <div className="justify-center align-middle mx-6">
            <div className="flex w-full bg-gray-50 bourder rounded-xl p-5">
              <select
                className="w-2/5 p-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              >
                <option value="Aceh">Aceh</option>
                <option value="Sumatera Utara">Sumatera Utara</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
                <option value="Sumatera Barat">Sumatera Selatan</option>
                <option value="Riau">Riau</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Jambi">Jambi</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Bangka Belitung">Bangka Belitung</option>
                <option value="Lampung">Lampung</option>
                <option value="Banten">Banten</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="DI Yogyakarta">DI Yogyakarta</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="Bali">Bali</option>
                <option value="NTB">NTB</option>
                <option value="NTT">NTT</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Sulawesi Barat">Sulawesi Barat</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Papua">Papua</option>
                <option value="Papua Barat">Papua Barat</option>
              </select>
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="w-2/5 p-2 ml-6"
                type="search"
                placeholder="Search product"
              />
              <div className="w-1/5 p-2 tracking-wide text-gray-50 text-center font-bold transition-colors duration-200 transform bg-orange-600 rounded-full hover:bg-orange-500 ml-6">
                <button className="w-full" onClick={() => getData()}>
                  Search
                </button>
              </div>
            </div>
            <div className="w-full bg-gray-50 p-6 border rounded-xl mt-6 h-3/4 overflow-y-auto">
              <table className="w-full table-fixed justify-center overflow-y-auto">
                <thead>
                  <tr>
                    <th className="w-1/5">Provinsi</th>
                    <th className="w-1/5">Nama Obat</th>
                    <th className="w-1/5">Kategori Obat</th>
                    <th className="w-1/5">Harga Obat</th>
                    <th className="w-1/5">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((dat) => (
                    <tr key={dat.id} className="py-8">
                      <td className="w-1/5 text-center">{dat.Provinsi}</td>
                      <td className="w-1/5 text-center">{dat.namaObat}</td>
                      <td className="w-1/5 text-center">{dat.katObat}</td>
                      <td className="w-1/5 text-center">{dat.hargaObat}</td>
                      <td className="w-1/5 text-center">{dat.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
