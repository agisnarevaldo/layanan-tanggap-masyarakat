"use client";

import Link from "next/link";
import Button from "./button";
import { useState } from "react";
import ButtonModal from "./modal";

export default function FormLapor() {
  const [category, setCategory] = useState("");
  const [waktu, setWaktu] = useState("");
  const [nama, setNama] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [bukti, setBukti] = useState<File | null>(null);
  const [lokasi, setLokasi] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("category", category);
    formData.append("waktu", waktu);
    formData.append("nama", nama);
    formData.append("tanggal", tanggal);
    if (bukti) {
      formData.append("bukti", bukti);
    }
    formData.append("lokasi", lokasi);
    formData.append("keterangan", keterangan);

    // Kirim data ke API untuk ditambahkan
    const response = await fetch("/api/create", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Data berhasil ditambahkan
      const data = await response.json();
      console.log(data);

      // Reset form
      setCategory("");
      setWaktu("");
      setNama("");
      setTanggal("");
      setBukti(null);
      setLokasi("");
      setKeterangan("");
    } else {
      // Terjadi kesalahan saat menambahkan data
      console.error("Gagal menambahkan data laporan");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Jenis Laporan
          </label>
          <select
            id="kategori"
            value={category}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Pilih Laporan Anda
            </option>
            <option value="kesehatan">Kesehatan</option>
            <option value="bencana alam">Bencana Alam</option>
            <option value="Kebakaran">Kebakaran</option>
            <option value="kesepian">Kesepian</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="waktu"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Waktu
          </label>
          <input
            type="time"
            name="waktu"
            id="waktu"
            value={waktu}
            onChange={(event) => setWaktu(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type product name"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nama Pelapor
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Nama Pelapor"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="tanggal"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tanggal
          </label>
          <input
            type="datetime-local"
            name="tanggal"
            id="tanggal"
            value={tanggal}
            onChange={(event) => setTanggal(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Tanggal Kejadian"
            required
          />
        </div>
        <div>
          <label
            htmlFor="bukti"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Bukti Kejadian
          </label>
          <input
            type="file"
            name="bukti"
            id="bukti"
            onChange={(event) => setBukti(event.target.files?.[0] || null)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Upload bukti laporan"
          />
        </div>
        <div>
          <label
            htmlFor="lokasi"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Lokasi
          </label>
          <input
            type="text"
            name="lokasi"
            id="lokasi"
            value={lokasi}
            onChange={(event) => setLokasi(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Lokasi Kejadian"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="keterangan"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Keterangan
          </label>
          <textarea
            id="keterangan"
            rows={8}
            name="keterangan"
            value={keterangan}
            onChange={(event) => setKeterangan(event.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Keterangan Laporan"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Link
          href="/home"
          className="w:-1/12 sm:w-1/6 text-center text-primary rounded-full items-center px-5 py-2.5 mt-4 text-sm font-medium border border-[#436850]"
        >
          Batalkan
        </Link>
        <ButtonModal />
        {/* <Button
          type="submit"
          classname="w:1/12 sm:w-1/6 items-center px-5 py-2.5 mt-4 text-sm font-medium text-center text-white bg-primary-700 focus:ring-4 focus:ring-primary-200 border-[#436850]"
        >
          Laporkan
        </Button> */}
      </div>
    </form>
  );
}
