"use client";

import React, { useEffect, useState } from 'react';

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

const DataViewer: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/read');
        if (!response.ok) {
          throw new Error('Data fetch failed');
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
    <div>
      <h1>Data Laporan</h1>
      <table className="min-w-full divide-y divide-gray-200 shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lokasi</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bukti</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item: DataItem) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.nama}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tanggal}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">{item.keterangan}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.lokasi}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.bukti}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {item.status ? "Selesai" : "Proses"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataViewer;
