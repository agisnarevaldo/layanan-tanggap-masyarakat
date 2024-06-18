import React from "react";
import FormLogin from "../../ui/formLogin";
import Link from "next/link";
import Logo from "../../ui/logo";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <FormLogin />
    </div>
  );
};

export default LoginPage;
