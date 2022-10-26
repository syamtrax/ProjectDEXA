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
    <div className="flex flex-col w-full h-screen">
      <div className="absolute">
        <Navbar />
      </div>
      <div className="flex mt-20 h-full">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex bg-gray-200 w-full">
          <table className="flex table-fixed ">
            <thead>
              <tr>
                <th className="w-24 flex justify-start pl-2">Provinsi</th>
                <th className="w-16 ">Nama Obat</th>
                <th className="w-16 ">Kategori Obat</th>
                <th className="w-16 ">Harga Obat</th>
                <th className="w-16 ">Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dat) => (
                <tr key={dat.id}>
                  <td className="w-40 text-center">{dat.Provinsi}</td>
                  <td className="w-56">{dat.namaObat}</td>
                  <td className="w-56">{dat.katObat}</td>
                  <td className="w-56">{dat.hargaObat}</td>
                  <td className="w-56">{dat.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="justify-center py-96 align-middle">
            <div className="w-full bg-gray-500">
              <select
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
                type="search"
                placeholder="Search product"
              />
              <div>
                <button onClick={() => getData()}>Search</button>
              </div>
              <table className=" table-fixed justify-center py-2 ">
                <thead>
                  <tr>
                    <th className="w-24 ">Provinsi</th>
                    <th className="w-16 ">Nama Obat</th>
                    <th className="w-16 ">Kategori Obat</th>
                    <th className="w-16 ">Harga Obat</th>
                    <th className="w-16 ">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((dat) => (
                    <tr key={dat.id}>
                      <td className="w-40 text-center">{dat.Provinsi}</td>
                      <td className="w-56">{dat.namaObat}</td>
                      <td className="w-56">{dat.katObat}</td>
                      <td className="w-56">{dat.hargaObat}</td>
                      <td className="w-56">{dat.score}</td>
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
