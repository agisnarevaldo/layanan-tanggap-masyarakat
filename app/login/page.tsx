import React from "react";
import FormLogin from "../ui/formLogin";
import Link from "next/link";
import Logo from "../ui/logo";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-bold text-color">
            Masuk ke Akun Anda
          </h2>
        </div>
        <FormLogin />
        <div className="flex justify-center items-center gap-2">
          <p>Belum punya akun?</p>
          <Link href="/signup" className="text-blue-600">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
