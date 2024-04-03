import Image from "next/image";
import Button from "../ui/button";

export default function Home() {
  return (
    <main>
      <div className="ml-20 flex justify-between items-center text-color">
        <div className="flex flex-col gap-2">
          <h1 className="leading-relaxed text-3xl font-semibold">
            Selamat Siang Jhon 👋
            <br /> Masalah apa yang bisa <br /> kami bantu?
          </h1>
          <Button classname="w-max">Laporkan Masalah</Button>
        </div>
        <Image src="/images/dec.svg" width={444} height={542} alt="image" />
      </div>
    </main>
  );
}
