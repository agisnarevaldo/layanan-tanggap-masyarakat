import Image from "next/image";

export default function Logo() {
  return (
    <figure className="flex items-center gap-2 justify-center">
      <Image src="/ltm.svg" alt="logo" width={72} height={72} />
      <figcaption>
        <p className="self-center text-xl font-bold whitespace-nowrap text-color">
          Layanan
        </p>
        <p className="self-center text-xl font-bold whitespace-nowrap text-color">
          Tanggap
        </p>
        <p className="self-center text-xl font-bold whitespace-nowrap text-color">
          Masyarakat
        </p>
      </figcaption>
    </figure>
  );
}
