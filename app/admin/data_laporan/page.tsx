import DataViewer from "@/app/ui/admin/dataViewer";
import Tabel from "../../ui/admin/tabel";

export default async function DataLaporan() {
  return (
    <div className="w-full m-10 border-green-700 border-2 rounded-3xl">
      <h1 className="text-2xl font-bold text-center">Data Laporan Masuk</h1>
      <DataViewer />
    </div>

  )
}