import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-20 py-2 absolute top-0 w-full">
      <Image src="/ltm.svg" alt="ltm logo" width={72} height={72} />
      <ul className="items-center flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/">Tentang</Link>
        <Link href="/">Tata Cara</Link>
        <Link href="/">Hubungi</Link>
        <button className="h-10 px-6 font-semibold rounded-full bg-primary text-white">
          Login
        </button>
      </ul>
    </div>
  );
}
