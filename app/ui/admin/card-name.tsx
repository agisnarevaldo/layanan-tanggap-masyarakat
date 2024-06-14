import { Icon } from "@iconify/react";

export default function CardName() {
  return (
    <div className="bg-green-900 w-auto h-48 p-4 rounded-3xl flex justify-between items-center">
      <div className="flex flex-col pl-5">
        <h2 className="text-4xl font-semibold">Hello Admin!</h2>
        <p>Semoga harimu menyenangkan</p>
      </div>

      <div>
        <Icon icon="entypo:user" className="text-white text-[150px] mt-11" />
      </div>
    </div>
  );
}
