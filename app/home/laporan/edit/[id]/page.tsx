"use client";

import { useEffect, useState } from "react";

const EditLaporan = ({ params }: any) => {
  const { id } = params;
  const [category, setCategory] = useState("");
  const [nama, setNama] = useState("");
  const [waktu, setWaktu] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [bukti, setBukti] = useState("");

  const [laporan, setLaporan] = useState([
    {
      category: "",
      waktu: "",
      nama: "",
      tanggal: "",
      bukti: "",
      lokasi: "",
      keterangan: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/reports/${id}`);
      const data = await response.json();
      // console.log(data);
      setLaporan(data);
      setCategory(laporan[0].category);
      setNama(laporan[0].nama);
      setBukti(laporan[0].bukti);
      setLokasi(laporan[0].lokasi);
      setKeterangan(laporan[0].keterangan);
      setWaktu(laporan[0].waktu);
      setTanggal(laporan[0].tanggal);
    };

    if (id) {
      fetchData();
    }
  }, [id, laporan]);

  // console.log(laporan[0]);
  // console.log(laporan);
  // console.log(typeof laporan);
  // console.log(laporan[0].category);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const dataBaru = {
      category,
      waktu: waktu,
      tanggal,
      nama,
      bukti,
      lokasi,
      keterangan,
    };

    const response = await fetch(`/api/reports/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBaru),
    });

    if (response.ok) {
      console.log("Data updated successfully");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w mx-auto p-4 pt-6 pb-8 mb-4 rounded shadow-md"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lokasi"
        >
          Jenis Laporan:
          <input
            type="text"
            // value={category}
            defaultValue={category}
            onChange={(event) => setCategory(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Waktu:
          <input
            type="time"
            // value={waktu}
            defaultValue={waktu}
            onChange={(event) => setWaktu(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nama Pelapor:
          <input
            type="text"
            // value={nama}
            defaultValue={nama}
            onChange={(event) => setNama(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tanggal:
          <input
            type="date"
            // value={tanggal}
            defaultValue={tanggal}
            onChange={(event) => setTanggal(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Bukti Kejadian:
          <input
            type="text"
            // value={bukti}
            defaultValue={bukti}
            onChange={(event) => setBukti(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Lokasi:
          <input
            type="text"
            // value={lokasi}
            defaultValue={lokasi}
            onChange={(event) => setLokasi(event.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Keterangan:
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // value={keterangan}
            defaultValue={keterangan}
            onChange={(event) => setKeterangan(event.target.value)}
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default EditLaporan;
