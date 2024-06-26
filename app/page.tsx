import Image from "next/image";
import Navbar from "./ui/navbar";
import Contact from "./ui/contact";
import Footer from "./ui/footer";
import Link from "next/link";
import Button from "./ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-28">
      <h1 className="max-w-min text-[60px] font-bold text-color animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#436850] pr-5">
        CEPAT TANGGAP SIGAP
      </h1>
      <p className="font-semibold text-2xl text-color">
        Laporkan Kejadian Darurat Di Lingkungan Anda
      </p>
      <p className="text-xl">Kami Siap Siaga Melayani Laporan Anda</p>
      <Link
        href="/home/laporan"
        // className="flex items-center h-10 px-6 font-semibold rounded-full bg-primary text-white"
      >
        <Button classname="w-40 font-semibold">Laporkan</Button>
      </Link>
    </div>
  );
};
const About = () => {
  return (
    <div className="flex gap-24 min-h-screen items-center" id="about">
      <Image
        src="/images/dec-left.svg"
        alt="decoratin left"
        width={314}
        height={441}
      />
      <article className="h-full flex flex-col gap-5 text-center">
        <h1 className="text-3xl font-semibold">Tentang</h1>
        <p className="font-medium leading-8 text-justify">
          <span className="text-[#436850] font-semibold">
            Layanan Tanggap Masyarakat
          </span>{" "}
          adalah Aplikasi online untuk memudahkan masyarakat ketika membutuhkan
          bantuan seperti bencana alam, tindak kriminal, penertiban dan bantuan
          lainya. Jangan bingung bila mendapat suatu masalah atau kejadian,
          laporkan saja pada kami !.
        </p>
      </article>
      <Image src="/images/dec-right.svg" alt="right" width={314} height={441} />
    </div>
  );
};

const CaraLapor = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-8" id="cara">
        Berikut Cara Melapor:
      </h1>
      <div className="flex flex-wrap w-full justify-center gap-8">
        <Image src="/images/cara-1.svg" alt="Cara 1" width={570} height={212} />
        <Image src="/images/cara-2.svg" alt="Cara 1" width={570} height={212} />
        <Image src="/images/cara-3.svg" alt="Cara 1" width={570} height={212} />
        <Image src="/images/cara-4.svg" alt="Cara 1" width={570} height={212} />
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col gap-20">
      <Navbar />
      <Home />
      <About />
      <CaraLapor />
      <Contact />
      <Footer />
    </main>
  );
}
