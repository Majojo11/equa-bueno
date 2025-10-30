import ChangeButton from "./ChangeButton"

export default function Right() {
    return (
        <div className="flex flex-col justify-center items-center w-1/2 bg-gray-400 text-black text-center px-10">
            <h1 className="text-4xl mb-4 font-semibold">Hola!</h1>
        <p className="text-base mb-6 max-w-sm">
            Bienvenido a Equa
        </p>
        <p className="text-base mb-6 max-w-sm">
            tu espacio para gestionar proyectos y colaborar con tu equipo de forma sencilla. Inicia sesión o crea una cuenta para comenzar.</p>
        <ChangeButton/>
        </div>
    )
}
