import Image from "next/image";
"use client";

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

      {/* Parte derecha (mensaje complementario) */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-400 text-black text-center px-10">
        <h1 className="text-4xl mb-4 font-semibold">Hi!</h1>
        <p className="text-base mb-6 max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit id mus, est ti
        </p>
        <button
          onClick={() => (window.location.href = "/login")} /* Para navegar a la página de login pero no se si este bien */
          className="px-6 py-3 rounded-lg bg-gray-300 font-bold text-lg cursor-pointer hover:bg-gray-200"
        >
          LOG IN
        </button>
      </div>
    </div>
  );
}
