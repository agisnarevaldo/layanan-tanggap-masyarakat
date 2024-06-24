import { Icon } from "@iconify/react";

interface CardNameProps {
  username: string;
}

export default function CardName({ username }: CardNameProps) {
  return (
    <div className="bg-primary w-auto h-48 p-4 rounded-3xl flex justify-between items-center">
      <div className="flex flex-col pl-5">
        <h2 className="text-4xl font-semibold">Hello {username}</h2>
        <p>Semoga harimu menyenangkan</p>
      </div>

      <div>
        <Icon icon="entypo:user" className="text-[#F5F5F5] text-[150px] mt-11" />
      </div>
    </div>
  );
}
