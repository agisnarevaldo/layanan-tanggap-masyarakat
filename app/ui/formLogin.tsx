import Button from "./button";
import Input from "./input";

const FormLogin = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" classname="w-2/4 m-auto">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
