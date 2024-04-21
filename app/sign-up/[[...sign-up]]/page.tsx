import { SignUp } from "@clerk/nextjs";
import FormRegister from "../../ui/formRegister";
import Logo from "../../ui/logo";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp path="/sign-up" />
    </div>
  );
};

export default SignupPage;
