"use client";

import Image from "next/image";
import ChangeButton from "./_components/ChangeButton";
import Right from "./_components/Right";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen overflow-hidden">

      {/* Parte izquierda (formulario de login/signup) */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-200">
        <div className="bg-gray-300 p-12 rounded-2xl w-[500px] flex flex-col items-center">
          {children}
        </div>
      </div>
        <Right/>
      </div>
  );
}
