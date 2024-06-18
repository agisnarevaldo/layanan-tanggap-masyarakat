"use client";

import Image from "next/image";
import Link from "next/link";
import style from "@/app/ui/navbar.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-20 py-2 sticky top-0 z-10 backdrop-blur-lg">
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
                [style.active]: pathname === '/#about',
              },
            )}
          href="/"
        >
          Home
        </Link>
        <Link 
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/#about',
              },
          )}
          href="#about"
        >
          Tentang
        </Link>
        <Link
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/#cara',
              },
          )}
          href="#cara"
        >
          Cara Melapor
        </Link>
        
        <Link 
          className={clsx(
              style.link,
              {
                [style.active]: pathname === '/#contact',
              },
          )}
          href="#contact"
        >
          Kontak
        </Link>

        <Link href="/sign-in">
          <button className="h-10 px-6 font-semibold rounded-full bg-primary text-white hover:bg-opacity-90">
            Login
          </button>
        </Link>
      </ul>
    </div>
  );
}
