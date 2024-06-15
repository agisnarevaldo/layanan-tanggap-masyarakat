"use client";

import Link from "next/link";
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
    <main className="mb-32 px-4">
      <ul className="divide-y divide-gray-200">
        {lapor.map((item: any) => (
            <li
                key={item.id}
                className="grid grid-cols-3 bg-gray-100 shadow-lg w-max rounded-2xl border-[3px] px-11 py-6 border-[#436850] mx-auto gap-y-4 gap-x-20 items-center"
                // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
            >
              <h1 className="text-3xl font-semibold mb-2 col-span-full">
                Data Laporan
                <span className="block text-sm font-light">Yang bersangkutan di bawah ini:</span>
              </h1>
              <div>
                <p className="font-light">
                  Kategori:{" "}
                </p>
                <p className="font-semibold text-gray-900 truncate">
                  {item.category}
                </p>
              </div>

              <div className="">
                <p className="font-light">
                  Waktu:{" "}
                </p>
                <p className="font-semibold text-gray-900 truncate">
                  {item.waktu}
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
                <p className={`text-secondary text-center font-semibold rounded ${item.status ? "bg-green-700" : "bg-red-600"} truncate`}>
                  {item.status ? "Selesai" : "Proses"}
                </p>
              </div>

              <div className="col-span-2 flex justify-between items-center">
                <div>
                  <p className="font-light">
                    Keterangan:{" "}
                  </p>
                  <p className="font-semibold text-gray-900 truncate">
                    {item.keterangan}
                  </p>
                </div>

              </div>
            </li>
        ))}
      </ul>

      {/* Link kembali */}
      <Link
          href="/home/laporan"
          className="bg-primary text-white px-6 py-2 rounded-lg absolute bottom-8 right-1/2 translate-x-1/2"
      >
        Kembali
      </Link>
    </main>
  );
}
