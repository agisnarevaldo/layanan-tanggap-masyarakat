import DataViewer from "@/app/ui/admin/dataViewer";

export default async function DataLaporan() {
  return (
    <div className="w-full m-10 rounded-3xl">
      <h1 className="text-2xl font-bold text-center">Data Laporan Masuk</h1>
      <DataViewer />
    </div>

  )
}