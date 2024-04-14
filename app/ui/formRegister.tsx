import Link from "next/link";
import Button from "./button";
import Input from "./input";
import Label from "./label";

const FormRegister = () => {
  return (
    <form
      action=""
      className="flex flex-col w-max gap-4 m-auto"
      autoComplete="on"
    >
      <div className="md:flex bg-primary py-6 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="flex flex-col gap-2 items-center">
          <Label htmlFor="fullname">Nama Lengkap</Label>
          <Input
            id="fullname"
            type="text"
            placeholder="Nama Lengkap"
            className="w-3/4 m-auto"
            autoComplete="name"
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="w-3/4 m-auto"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-2 items-center">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            className="w-3/4 m-auto"
            autoComplete="new-password"
          />
          <Label htmlFor="confirm-password">Konfirmasi Password</Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Konfirmasi Password"
            className="w-3/4 m-auto"
            autoComplete="new-password"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-around items-center">
        <Button type="submit" classname="w-1/3">
          Daftar
        </Button>
        <p>
          Sudah punya akun?{" "}
          <Link href="/login" className="text-blue-600">
            Masuk
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
