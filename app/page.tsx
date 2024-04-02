import Image from "next/image";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      <Navbar />
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-[60px] font-bold text-color">
          CEPAT TANGGAP SIGAP
        </h1>
        <p className="font-semibold text-2xl">
          Laporkan Kejadian Darurat Di Lingkungan Anda
        </p>
        <p className="text-xl">Kami Siap Siaga Melayani Laporan Anda</p>
        <button className="h-10 px-6 font-semibold rounded-full bg-primary text-white">
          Laporkan Masalah
        </button>
      </div>
    </main>
  );
}
