import React from "react";
import FormLogin from "../../ui/formLogin";
import Link from "next/link";
import Logo from "../../ui/logo";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SignIn path="/sign-in" />
      <Link href="/login" className="text-blue-400 mt-2 text-sm">
        Masuk Sebagai Admin
      </Link>
    </div>
  );
};

export default LoginPage;
