import Button from "./button";
import Input from "./input";

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <Input type="text" placeholder="Nama Lengkap" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Konfirmasi Password" />
      <Button type="submit">Daftar</Button>
    </form>
  );
};

export default FormRegister;
