"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Card from "../ui/admin/card";
import CardName from "../ui/admin/card-name";
import CardProfile from "../ui/admin/card-profile";
import { useEffect, useState } from "react";

interface ApiResponse {
  total_records: number;
  jumlah_status_true: number;
  jumlah_status_false: number;
}

export default function AdminPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/count');
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const result: ApiResponse = await response.json();
          setData(result);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);
    
  return (
    <div className="flex justify-evenly w-full">
      <div className="p-5 text-white">

        <div className="mb-5">
          <CardName username="Agis" />
        </div>

        <div className="pt-5 grid grid-cols-2 gap-x-4 gap-y-4">
          <Card
            classname="bg-primary w-64"
            count={`${data?.total_records}`}
            title="Data Laporan Masuk"
          >
            <Icon icon="tabler:clipboard-data" className="text-white text-[50px]" />
          </Card>

          <Card
            classname="bg-transparent border-2 border-primary text-primary w-64"
            count={`${data?.jumlah_status_false}`}
            title="Laporan di Proses"
          >
            <Icon icon="tabler:report" className="text-[50px]" />
          </Card>

          <Card 
            classname="bg-primary w-full col-span-full"
            count={`${data?.jumlah_status_true}`}
            title="Laporan Selesai"
          >
            <Icon icon="hugeicons:task-done-01" className="text-white text-[50px]" />
          </Card>
        </div>
      </div>

      <div className="p-5">
        <CardProfile name="Agisna Revaldo" level="Admin" />
      </div>
    </div>
  );
}
