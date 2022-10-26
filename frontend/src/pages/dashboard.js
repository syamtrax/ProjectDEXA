import React, {useState, useEffect} from "react";
import Navbar from "../components/navbar";
import axios from "axios";


function Dashboard() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/search?Provinsi=${search}`);
    setData(response.data);
  };




  return (
    <div className="bg-gray-300 w-full flex max-h-screen">
      <div className="absolute">
        <Navbar />
      </div>
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
            {data.map((dat)=>(
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
        <input
          onChange={(e) => {
            setSearch(e.target.value)
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
            {data.map((dat)=>(
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
  );
}

export default Dashboard;
