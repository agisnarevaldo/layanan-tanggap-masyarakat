import FormLapor from "../ui/formLapor";

const LaporPage = () => {
  return (
    <main className="pt-8 px-4 mx-auto max-w-4xl min-h-screen">
      <div className="text-center mb-4">
        <h1 className="text-2xl text-color font-semibold">
          Laporkan Masalah Anda
        </h1>
        <p>Laporan anda akan di proses dalam 1x24 jam</p>
      </div>
      <FormLapor />
    </main>
  );
};

export default LaporPage;
