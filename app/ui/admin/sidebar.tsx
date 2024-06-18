import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const AdminSidebar = () => {
  return (
    <div className="bg-green-900 text-white w-64 min-h-screen">
      <Image
        src="/ltm.svg"
        className="mx-auto mt-5"
        alt="logo"
        width={80}
        height={80}
      />

      <ul className="mt-12">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <Link href="/admin">
            <div className="flex items-center">
              <Icon icon="material-symbols:home" className="mr-4" /> Dashboard
            </div>
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <Link href="/admin/data_laporan">
            <div className="flex items-center">
              <Icon icon="heroicons:user-group-20-solid" className="mr-4" />{" "}
              Laporan Masuk
            </div>
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <Link href="/admin">
            <div className="flex items-center">
              <Icon icon="carbon:user-filled" className="mr-4" /> Laporan Selesai
            </div>
          </Link>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <Link href="/settings">
            <div className="flex items-center">
              <Icon icon="streamline:task-list-solid" className="mr-4" />{" "}
              Pengaturan
            </div>
          </Link>
        </li>
      </ul>

      <div className="flex items-center absolute bottom-0 p-4">
        <button className="flex items-center">
          <Icon icon="carbon:logout" className="mr-4" /> Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
