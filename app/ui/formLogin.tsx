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
      className="flex flex-col gap-4 w-full max-w-lg mx-auto"
      autoComplete="off"
    >
      <div className="flex w-max mx-auto flex-col gap-5 items-center bg-primary py-8 rounded-3xl shadow-2xl shadow-slate-600">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="Masukkan username"
          className="max-w-full mx-12 -mt-2 text-center"
          autoComplete="username"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          // name="password"
          type="password"
          placeholder="Masukkan password"
          className="max-w-full mx-12 -mt-2 text-center"
          autoComplete="current-password"
        />

        <Button type="submit" classname="w-1/4 m-auto">
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
