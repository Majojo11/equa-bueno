"use client";

import { Button, Input, Link } from "@heroui/react";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center font-sans bg-gray-100 p-10 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">REGISTRARSE</h2>

      <div className="flex flex-col w-80 gap-4">
        <Input label="Email" type="email" isRequired className="bg-gray-200 rounded-md"/>
        <Input label="Username" type="username" isRequired className="bg-gray-200 rounded-md"/>
        <Input label="Password" type="password" isRequired className="bg-gray-200 rounded-md"/>

        <Button className="bg-gray-300 text-black font-semibold hover:bg-gray-400 transition">Registrarse</Button>
      </div>

      <p className="mt-6 text-sm text-gray-700">
        ¿Ya tienes una cuenta?{" "}
        <Link
          href="/auth/login"
          className="text-gray-600 hover:underline font-semibold"
        >
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}
