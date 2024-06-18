import { Icon } from "@iconify/react/dist/iconify.js";
import Card from "../ui/admin/card";
import CardName from "../ui/admin/card-name";
import CardProfile from "../ui/admin/card-profile";

export default async function AdminPage() {
  return (
    <div className="flex justify-evenly w-full">
      <div className="p-5 text-white">
        <div className="mb-5">
          <CardName />
        </div>
        <div className="pt-5 grid grid-cols-2 gap-x-4 gap-y-4">

          <Card classname="bg-green-900" count={4} title="Data Laporan Masuk">
            <Icon icon="bxs:report" className="text-white text-[50px]" />
          </Card>

          <Card classname="bg-transparent border-2 border-green-900 text-green-900" count={3} title="Data Konfirmasi Laporan">
              <Icon icon="tabler:report" className="text-[50px]" />
          </Card>

          <Card classname="bg-transparent border-2 border-green-900 text-green-900" count={7} title="Data Konfirmasi Laporan">
              <Icon icon="carbon:data-check" className="text-[50px]" />
          </Card>

          <Card classname="bg-green-900" count={4} title="Data Laporan Selesai">
              <Icon icon="majesticons:door-enter" className="text-white text-[50px]" />
          </Card>

        </div>
      </div>

      <div className="p-5">
        <CardProfile />
      </div>
    </div>
  );
}
