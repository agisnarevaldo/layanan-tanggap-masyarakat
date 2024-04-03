import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 py-2">
      <Image src="/ltm.svg" alt="ltm logo" width={72} height={72} />
      <ul className="items-center flex gap-10">
        <Link href="/home">Home</Link>
        <Link href="/home/tentang">Tentang</Link>
        <Link href="/home/caralapor">Cara Melapor</Link>
        <Link href="/home/laporan">Laporan Anda</Link>
        <Link href="/home/kontak">Kontak</Link>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#3B3B3B"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </ul>
    </div>
  );
}
