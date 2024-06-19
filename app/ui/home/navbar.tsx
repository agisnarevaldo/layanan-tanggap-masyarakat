"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center px-20 py-2">
      <div className="flex gap-2 items-center">
        <Image src="/ltm.svg" alt="ltm logo" width={72} height={72} />
        <div className="text-[#292929]">
          <h1 className="text-xl font-semibold leading-normal">Layanan</h1>
          <h1 className="text-xl font-semibold leading-[16px]">Tanggap</h1>
          <h1 className="text-xl font-semibold leading-normal">Masyarakat</h1>
        </div>
      </div>
      <ul className="items-center flex gap-10">
        <Link 
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/home',
              },
            )}
          href="/home"
        >
          Home
        </Link>
        <Link 
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/home/tentang',
              },
          )}
          href="/home/tentang"
        >
          Tentang
        </Link>
        <Link
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/home/caralapor',
              },
          )}
          href="/home/caralapor"
        >
          Cara Melapor
        </Link>
        <Link 
          className={clsx(style.link, {[style.active]: pathname === '/home/laporan'})}
          href="/home/laporan"
        >
          Laporan Anda
        </Link>
        <Link 
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/home/kontak',
              },
          )}
          href="/home/kontak"
        >
          Kontak
        </Link>
        <UserButton />
      </ul>
    </div>
  );
}
