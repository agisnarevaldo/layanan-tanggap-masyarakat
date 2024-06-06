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
    <main>
      <h1 className="text-2xl font-bold text-center">Detail Laporan</h1>
      <div></div>
      <ul className="divide-y divide-gray-200">
        {lapor.map((item: any) => (
          <li
            key={item.id}
            className="flex flex-col bg-green-100 max-w-min mx-auto gap-2"
          >
            <div>
              <p className="font-medium text-gray-900 truncate">
                {item.category}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 truncate">{item.waktu}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 truncate">{item.nama}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 truncate">
                {item.lokasi}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 truncate">
                {item.tanggal}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 truncate">
                {item.keterangan}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 truncate">
                {item.status ? "Selesai" : "Proses"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
