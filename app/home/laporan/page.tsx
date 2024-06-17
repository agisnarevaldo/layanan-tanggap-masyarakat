"use client";

import { Icon } from "@iconify/react";
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
        <div className="w-full mx-auto p-8 rounded-lg shadow-md ">
            <h1 className="text-2xl font-bold mb-4">Daftar Laporan</h1>
            <ul className="divide-y divide-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {lapor.map((item: any) => (
                    <li key={item.id} >
                        <div className="p-4 rounded-xl flex items-center space-x-4 border-2 border-primary">
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-gray-900 truncate">
                                    {item.category}
                                </p>
                                <p className="text-sm text-gray-600 truncate">{item.waktu}</p>
                                <p className="text-sm text-gray-600 truncate">{new  Date(item.tanggal).toLocaleDateString('id-ID')}</p>
                            </div>
                            <div>
                                <p className={`truncate text-center text-white px-4 my-4 rounded ${item.status ? "bg-green-700" : "bg-red-700"}`}>
                                    {item.status ? "Selesai" : "Proses"}
                                </p>
                                <div className="flex gap-2 items-center">
                                    <Link
                                        href={`/home/laporan/detail/${item.id}`}
                                        className="text-primary text-2xl"
                                    >
                                        <Icon icon="gg:expand" />
                                    </Link>
                                    <Link
                                        href={`/home/laporan/edit/${item.id}`}
                                    >
                                        <Icon icon="tabler:edit" className="text-primary text-2xl" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <Icon icon="ph:trash" className="text-red-600 text-2xl" />
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

export default function LaporanPage()  {
    return (
        <main>
            <LaporList/>
        </main>
    );
};
