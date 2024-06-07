"use client";

import { useEffect, useState } from "react";

export default function DetailPage({ params }: any) {
  const { id } = params;
  const [lapor, setLapor] = useState([]);

  const [category, setCategory] = useState("");
  const [waktu, setWaktu] = useState("");
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [bukti, setBukti] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [keterangan, setKeterangan] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/reports/${id}`);
      const data = await response.json();
      console.log(data);
      setLapor(data);
      setCategory(data.category);
      setWaktu(data.waktu);
      setNama(data.nama);
      setBukti(data.bukti);
      setLokasi(data.lokasi);
      setKeterangan(data.keterangan);
      setTanggal(data.tanggal);
    };

    fetchData();
  }, [id]);
  return (
    <main className="py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Detail Laporan
      </h1>
      <ul className="divide-y divide-gray-200">
        {lapor.map((item: any) => (
          <li
            key={item.id}
            className="flex flex-col bg-gray-100 shadow-lg rounded rounded-lg border border-[#436850] max-w-md mx-auto gap-4 p-4"
          >
            <div>
              <p className="font-light">
                Kategori:{" "}
              </p>
              <p className="font-semibold text-gray-900 truncate">
                {item.category}
              </p>
            </div>
            <div>
              <p className="font-light">
                Waktu:{" "}
              </p>
              <p className="font-semibold text-gray-900 truncate">
                {item.waktu}
              </p>
            </div>
            <div>
              <p className="font-light">
                Nama:{" "}
              </p>
              <p className="font-semibold text-gray-900 truncate">
                {item.nama}
              </p>
            </div>
            <div>
                <p className="font-light">
                    Lokasi:{" "}
                </p>
              <p className="font-semibold text-gray-900 truncate">
                {item.lokasi}
              </p>
            </div>
            <div>
                <p className="font-light">
                    Bukti:{" "}
                </p>
                <p className="font-semibold text-gray-900 truncate">
                    {item.bukti}
                </p>
            </div>
            <div>
                <p className="font-light">
                    Tanggal:{" "}
                </p>
              <p className="font-semibold text-gray-900 truncate">
                {new Date(item.tanggal).toLocaleDateString("id-ID")}
              </p>
            </div>
            <div>
                <p className="font-light">
                    Keterangan:{" "}
                </p>
              <p className="font-semibold text-gray-900 truncate">
                {item.keterangan}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 truncate">
                {item.status ? "Selesai" : "Proses"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
