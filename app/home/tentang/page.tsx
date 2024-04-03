import Image from "next/image";

const TentangPage = () => {
  return (
    <main>
      <div className="flex gap-24">
        <Image
          src="/images/dec-left.svg"
          alt="decoratin left"
          width={314}
          height={441}
        />
        <article className="h-full flex flex-col gap-5 text-center">
          <h1 className="text-3xl font-semibold">Tentang</h1>
          <p className="font-medium leading-8 text-justify">
            <span className="text-[#436850]">Layanan Tanggap Masyarakat</span>{" "}
            adalah Aplikasi online untuk memudahkan masyarakat ketika
            membutuhkan bantuan seperti bencana alam, tindak kriminal,
            penertiban dan bantuan lainya. Jangan bingung bila mendapat suatu
            masalah atau kejadian, laporkan saja pada kami !.
          </p>
        </article>
        <Image
          src="/images/dec-right.svg"
          alt="right"
          width={314}
          height={441}
        />
      </div>
    </main>
  );
};

export default TentangPage;
