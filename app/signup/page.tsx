import Link from "next/link";
import FormRegister from "../ui/formRegister";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Daftar Akun
          </h2>
        </div>
        <FormRegister />
        <div className="flex justify-center items-center gap-2">
          <p>Sudah punya akun?</p>
          <Link href="/login" className="text-blue-600">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
