import { UserButton } from "@clerk/nextjs";
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
        <UserButton />
      </ul>
    </div>
  );
}
