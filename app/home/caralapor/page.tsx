import Image from "next/image";

const CaraLapor = () => {
  return (
    <main className="pb-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Berikut Cara Melapor:
      </h1>
      <div className="flex flex-wrap w-full justify-center gap-8">
        <Image src="/images/cara-1.svg" alt="Cara 1" width={570} height={212} />
        <Image src="/images/cara-2.svg" alt="Cara 1" width={570} height={212} />
        <Image src="/images/cara-3.svg" alt="Cara 1" width={570} height={212} />
        <Image src="/images/cara-4.svg" alt="Cara 1" width={570} height={212} />
      </div>
    </main>
  );
};

export default CaraLapor;
