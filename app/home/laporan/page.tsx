"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

const LaporList = () => {
    const [lapor, setLapor] = useState([]);

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this item?")) {
            const response = await fetch(`/api/reports/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            setLapor(lapor.filter((item: any) => item.id !== id));
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/read");
            const data = await response.json();
            setLapor(data);
        };

        fetchData();
    }, []);

    // console.log(lapor[0]);

    return (
        <div className="max-w-2xl w-full mx-auto p-8 rounded-lg shadow-md ">
            <h1 className="text-2xl font-bold mb-4">Daftar Laporan</h1>
            <ul className="divide-y divide-gray-200">
                {lapor.map((item: any) => (
                    <li key={item.id} className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {item.category}
                                </p>
                                <p className="text-sm text-gray-500 truncate">{item.Waktu}</p>
                                <p className="text-sm text-gray-500 truncate">{new  Date(item.tanggal).toLocaleDateString('id-ID')}</p>
                            </div>
                            <div>
                                <p className={`font-semibold truncate text-center py-2 px-4 my-2 rounded ${item.status ? "text-green-500" : "text-red-500"}`}>
                                    {item.status ? "Selesai" : "Proses"}
                                </p>
                                <div className="flex gap-2">
                                    <Link
                                        href={`/home/laporan/detail/${item.id}`}
                                        className="text-center bg-green-500 py-1 px-2 w-[72px] text-white rounded-md"
                                    >
                                        Detail
                                    </Link>
                                    <Link
                                        href={`/home/laporan/edit/${item.id}`}
                                        className="text-center bg-blue-500 py-1 px-2 w-[72px] text-white rounded-md"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 py-1 px-2 w-[72px] text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const LaporanPage = () => {
    return (
        <main>
            <LaporList/>
        </main>
    );
};

export default LaporanPage;
