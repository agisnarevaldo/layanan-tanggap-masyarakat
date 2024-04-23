import Image from "next/image";
import Link from "next/link";
import style from "@/app/ui/home/navbar.module.css";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 py-2 sticky top-0 z-10 backdrop-blur-lg">
      <Image src="/ltm.svg" alt="ltm logo" width={72} height={72} />
      <ul className="items-center flex gap-10">
        <Link href="/" className={style.link}>
          Home
        </Link>
        <Link href="#about" className={style.link}>
          Tentang
        </Link>
        <Link href="#cara" className={style.link}>
          Cara Melapor
        </Link>
        <Link href="#contact" className={style.link}>
          Kontak Kami
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
