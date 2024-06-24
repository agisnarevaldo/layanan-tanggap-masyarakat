"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ModalLogout from "@/app/ui/admin/modalLogout";

const AdminSidebar = () => {
  return (
    <div className="bg-primary text-white w-64 min-h-screen">
      <Image
        src="/ltm.svg"
        className="mx-auto mt-5"
        alt="logo"
        width={80}
        height={80}
      />

      <ul className="mt-12">
        <li className="p-4 bg-primary hover:bg-[#4C7D5D] cursor-pointer">
          <Link href="/admin">
            <div className="flex items-center">
              <Icon icon="material-symbols:home" className="mr-4" /> Dashboard
            </div>
          </Link>
        </li>
        <li className="p-4 hover:bg-[#4C7D5D] cursor-pointer">
          <Link href="/admin/data_laporan">
            <div className="flex items-center">
              <Icon icon="heroicons:user-group-20-solid" className="mr-4" />
              {" "}Laporan Masuk
            </div>
          </Link>
        </li>
        <li className="p-4 hover:bg-[#4C7D5D] cursor-pointer">
          <Link href="/admin/laporan_false">
            <div className="flex items-center">
              <Icon icon="carbon:user-filled" className="mr-4" />
              {" "}Laporan Proses
            </div>
          </Link>
        </li>
        <li className="p-4 hover:bg-[#4C7D5D] cursor-pointer">
          <Link href="/admin/laporan_true">
            <div className="flex items-center">
              <Icon icon="streamline:task-list-solid" className="mr-4" />
              {" "}Laporan Selesai
            </div>
          </Link>
        </li>
      </ul>

      <div className="flex items-center absolute bottom-0 p-4">
        <ModalLogout bgColor="transparent" textColor="white" width="full">
          <Icon icon="carbon:logout" className="mr-4" /> Keluar
        </ModalLogout>
        {/*<button className="flex items-center">*/}
        {/*  <Icon icon="carbon:logout" className="mr-4" /> Logout*/}
        {/*</button>*/}
      </div>
    </div>
  );
};

export default AdminSidebar;
