import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 py-2">
      <Image src="/ltm.svg" alt="ltm logo" width={72} height={72} />
      <ul className="items-center flex gap-10">
        <Link className={style.link} href="/home">
          Home
        </Link>
        <Link className={style.link} href="/home/tentang">
          Tentang
        </Link>
        <Link className={style.link} href="/home/caralapor">
          Cara Melapor
        </Link>
        <Link className={style.link} href="/home/laporan">
          Laporan Anda
        </Link>
        <Link className={style.link} href="/home/kontak">
          Kontak
        </Link>
        <UserButton />
      </ul>
    </div>
  );
}
