"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

export interface DataItem {
  id: number;
  nama: string;
  status: boolean;
  tanggal: string;
  category: string;
  keterangan: string;
  lokasi: string;
  bukti: string;
}

const DataTrue: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        const response = await fetch(`/api/reports/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Gagal menghapus data");
        }
        setData(data.filter((item) => item.id !== id)); // Update state untuk menghilangkan data yang dihapus
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleProcess = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin memproses data ini?")) {
      try {
        const response = await fetch(`/api/reports/activate/${id}`, {
          method: "PUT",
        });
        if (!response.ok) {
          throw new Error("Gagal memproses data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/processed");
        if (!response.ok) {
          throw new Error("Data fetch failed");
        }
        const result: DataItem[] = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-5xl mx-auto bg-primary rounded-lg py-2 px-1">
      <h1 className="text-white">Data Laporan</h1>
      <div style={{ overflowX: "auto" }}>
        <table className="min-w-full bg-white divide-y divide-gray-200 shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Keterangan
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lokasi
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bukti
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item: DataItem) => (
              <tr key={item.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.category}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status ? "Selesai" : "Proses"}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="bg-primary hover:bg-green-700 text-white font-bold p-2 text-lg rounded-full"
                    onClick={() => handleProcess(item.id)}
                  >
                    <Icon icon="ic:round-checklist" />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 text-lg rounded-full ml-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Icon icon="tabler:trash" />
                  </button>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.nama}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.tanggal}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">
                  {item.keterangan}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">
                  {item.lokasi}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">
                  {item.bukti}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTrue;
