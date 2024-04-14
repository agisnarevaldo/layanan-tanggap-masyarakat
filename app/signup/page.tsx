import FormRegister from "../ui/formRegister";
import Logo from "../ui/logo";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full space-y-8">
        <div>
          <Logo />
          <h2 className="mt-4 text-center text-3xl font-extrabold text-color">
            Daftar Akun
          </h2>
        </div>
        <FormRegister />
      </div>
    </div>
  );
};

export default SignupPage;
