import Button from "./button";
import Input from "./input";
import Label from "./label";

const FormLogin = () => {
  return (
    <form
      action="aksi_login"
      className="flex flex-col gap-4 w-full max-w-xl m-auto"
      autoComplete="on"
    >
      <div className="flex flex-col gap-7 items-center bg-primary py-6 rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          className="w-3/4 m-auto"
          autoComplete="email"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          className="w-3/4 m-auto"
          autoComplete="new-password"
        />

        <Button type="submit" classname="w-1/3 m-auto">
          Login
        </Button>
      </div>
      
    </form>
  );
};

export default FormLogin;
