"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DetailPage({ params }: any) {
  const { id } = params;
  const [lapor, setLapor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/reports/${id}`);
      const data = await response.json();
      console.log(data);
      setLapor(data);
    };

    fetchData();
  }, [id]);
  return (
    <main className="mb-28 px-4">
      <ul className="divide-y divide-gray-200">
        {lapor.map((item: any) => (
            <li
                key={item.id}
                className="grid grid-cols-3 bg-gray-100 shadow-lg max-w-3xl rounded-2xl border-[3px] px-11 py-6 border-[#436850] mx-auto gap-y-4 gap-x-20 items-start"
                // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
            >
              <div className=" mb-2 col-span-full flex justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">Data Laporan</h2>
                  <p className="block text-sm font-light">Yang bersangkutan di bawah ini:</p>
                </div>
                <Link href="/home/laporan" >
                  <Icon icon="ic:round-close" className="text-3xl text-red-600 font-bold hover:text-red-800 rounded-full"  />
                </Link>
              </div>
              <div className="row-span-2">
                {/* <p className="font-light">
                  Bukti:{" "}
                </p> */}
                {/* <img src={item.bukti} alt="Bukti Kejadian" className="w-full h-auto" /> */}
                <Image src={item.bukti} alt="Bukti Kejadian" width={200} height={200} className="rounded-lg" />
              </div>

              <div>
                <p className="font-light">
                  Nama Pelapor:{" "}
                </p>
                <p className="font-semibold text-gray-900 truncate">
                  {item.nama}
                </p>
              </div>

              <div className="">
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

              <div className="">
                <p className="font-light">
                  Lokasi:{" "}
                </p>
                <p className="font-semibold text-gray-900 truncate">
                  {item.lokasi}
                </p>
              </div>

              <div>
                <p className="font-light">
                  Status:{" "}
                </p>
                <p className={`text-secondary w-max px-4 text-center font-semibold rounded ${item.status ? "bg-green-700" : "bg-red-600"} truncate`}>
                  {item.status ? "Selesai" : "Proses"}
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

              <div className="">
                {/* <div> */}
                  <p className="font-light">
                    Keterangan:{" "}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {item.keterangan}
                  </p>
                {/* </div> */}

              </div>
            </li>
        ))}
      </ul>

      {/* Link kembali */}
      {/* <Link
          href="/home/laporan"
          className="bg-primary text-white px-6 py-2 rounded-lg absolute bottom-8 right-1/2 translate-x-1/2"
      >
        Kembali
      </Link> */}
    </main>
  );
}
