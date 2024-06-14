import { Icon } from "@iconify/react";

export default function CardProfile() {
  return (
    <div className="flex justify-between flex-col gap-7">
      <div className="flex justify-between">
        <div className="flex  bg-green-900 border-2 p-3 w-3/4 justify-center rounded-xl">
          <p className="text-white">Dashboard</p>
        </div>

        <div className="flex text-4xl gap-3 items-center">
          <Icon icon="mdi:bell" />
          <Icon icon="tdesign:user-circle" />
        </div>
      </div>
      {/* Card Profile */}
      <div className="border-2 border-green-900 w-[400px] h-[500px] p-4 rounded-3xl text-center flex-col flex justify-evenly">
        <div>
          <Icon
            icon="tdesign:user-circle"
            className="text-primary text-[100px] mx-auto"
          />
          <h2 className="font-semibold text-xl mt-2">Genta Septi Akhiryan</h2>
          <p className="text-sm">Admin</p>
        </div>

        <div className="flex-col flex gap-3">
          <button className="bg-green-900 text-white rounded-3xl px-4 py-2 w-44 mx-auto">
            Edit
          </button>
          <button className="bg-red-600 text-white rounded-3xl px-4 py-2 w-44 mx-auto">
            Keluar
          </button>
        </div>
      </div>
      {/* Akhir card */}
    </div>
  );
}
