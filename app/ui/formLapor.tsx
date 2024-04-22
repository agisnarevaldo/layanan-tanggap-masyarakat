import Link from "next/link";
import Input from "./input";
import Label from "./label";
import Button from "./button";

export default function FormLapor() {
  return (
    <form action="#">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          >
            <option selected={true}>Pilih Laporan Anda</option>
            <option value="kesehatan">Kesehatan</option>
            <option value="bencana alam">Bencana Alam</option>
            <option value="Kebakaran">Kebakaran</option>
            <option value="kesepian">Kesepian</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Waktu
          </label>
          <input
            type="time"
            name="waktu"
            id="waktu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Type product name"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nama Pelapor
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Product brand"
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tanggal
          </label>
          <input
            type="date"
            name="tanggal"
            id="tanggal"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="$2999"
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
            type="url"
            name="lokasi"
            id="lokasi"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Lokasi Kejadian"
            required
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Tulis Keterangan Anda"
            defaultValue={""}
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
        <Button
          type="submit"
          classname="w:1/12 sm:w-1/6 items-center px-5 py-2.5 mt-4 text-sm font-medium text-center text-white bg-primary-700 focus:ring-4 focus:ring-primary-200 border-[#436850]"
        >
          Laporkan
        </Button>
      </div>
    </form>
  );
}
