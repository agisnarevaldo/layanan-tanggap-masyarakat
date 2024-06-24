"use client";

import { Icon } from "@iconify/react";
import ModalLogout from "./modalLogout";
import ModalEdit from "./modalEdit";

interface CardProfileProps {
  name: string;
  level: string;
}

export default function CardProfile({ name, level }: CardProfileProps) {
  return (
    <div className="flex justify-between flex-col gap-7">
      <div className="flex justify-between">
        <div className="flex  bg-primary border-2 p-3 w-3/4 justify-center rounded-xl">
          <p className="text-white">Dashboard</p>
        </div>

        <div className="flex text-4xl gap-3 items-center">
          <Icon icon="mdi:bell" />
          <Icon icon="tdesign:user-circle" />
        </div>
      </div>
      {/* Card Profile */}
      <div className="border-2 border-primary w-[400px] h-[500px] p-4 rounded-3xl text-center flex-col flex justify-evenly">
        <div>
          <Icon
            icon="tdesign:user-circle"
            className="text-primary text-[100px] mx-auto"
          />
          <h2 className="font-semibold text-xl mt-2">{name}</h2>
          <p className="text-sm">{level}</p>
        </div>

        <div className="flex-col flex gap-3 items-center">
          <ModalEdit/>
          <ModalLogout bgColor="red-500" textColor="white" width="44">
            Keluar
          </ModalLogout>
        </div>
      </div>
      {/* Akhir card */}
    </div>
  );
}
