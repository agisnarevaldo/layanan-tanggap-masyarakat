"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Gunakan useRouter dari next/navigation
import Button from "./button";
import Input from "./input";
import Label from "./label";

const FormLogin = () => {
  const router = useRouter(); // Gunakan hook useRouter

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };
    const data = {
      username: target.username.value,
      password: target.password.value,
    };

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      router.push('/admin'); // Arahkan ke halaman admin jika login berhasil
    } else {
      alert(result.message); // Tampilkan pesan error jika login gagal
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-xl m-auto"
      autoComplete="on"
    >
      <div className="flex flex-col gap-7 items-center bg-primary py-6 rounded-2xl shadow-[rgba(0, 0, 0, 0.4) 0px 30px 90px]">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Masukkan username"
          className="w-3/4 m-auto"
          autoComplete="username"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          // name="password"
          type="password"
          placeholder="Masukkan password"
          className="w-3/4 m-auto"
          autoComplete="current-password"
        />

        <button type="submit" className="w-1/3 m-auto">
          Login
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
