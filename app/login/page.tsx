import React from "react";
import FormLogin from "../ui/formLogin";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
