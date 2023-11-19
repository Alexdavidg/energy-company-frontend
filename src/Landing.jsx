import { MainNavbar } from "./components/MainNavbar"

export const Landing = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col ">
        <MainNavbar />
        <div id="header" className="static w-full h-screen md:h-[96vh] flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 h-full flex md:px-36 px-4">

                <div id="headerTitlesContainer" className="absolute top-1/2 transform -translate-y-1/2">
                    <h5 className="w-fit bg-primary px-3 py-2 rounded-lg font-medium text-onprimary text-sm mb-3">Te damos la bienvenida</h5>
                    <h1 className="font-medium text-[10vw] md:text-6xl text-onbackground mb-6 leading-none">Impulsando el  futuro de la energia.</h1>
                    <p className="text-onbackground text-[5vw] md:text-2xl md:w-[30vw]">Soluciones sostenibles y eficientes para un mundo mejor.</p>
                </div>
                
                <div className="flex h-fit place-items-center absolute bottom-2">
                    <div className="w-9 h-5 bg-primary rounded-full"></div>
                    <h5 className="ml-3">Estamos a tu servicio!</h5>
                </div>
                
            </div>
            <div className="w-full md:w-1/2 h-32 md:h-full bg-primary md:rounded-bl-2xl flex justify-center place-items-center gap-2 px-4 md:px-0">
                <div className="w-[50vw] md:w-fit h-fit flex flex-row md:flex-col gap-2">
                    <div className="w-1/2 md:w-40 md:h-40 border-2 border-onprimary rounded-2xl flex justify-center place-items-center text-[3vw] md:text-lg text-center text-onprimary font-medium p-2 md:p-2">Generación de energía</div>
                    <div className="w-1/2 md:w-40 md:h-40 border-2 border-onprimary rounded-2xl flex justify-center place-items-center text-[3vw] md:text-lg text-center text-onprimary font-medium p-2 md:p-2">Distribución de energia</div>
                </div>
                <div className="w-[50vw] md:w-fit h-fit flex flex-row md:flex-col gap-2">
                    <div className="w-1/2 md:w-40 md:h-40 border-2 border-onprimary rounded-2xl flex justify-center place-items-center text-[3vw] md:text-lg text-center text-onprimary font-medium p-2 md:p-2">Consultoría Energética</div>
                    <div className="w-1/2 md:w-40 md:h-40 border-2 border-onprimary rounded-2xl flex justify-center place-items-center text-[3vw] md:text-lg text-center text-onprimary font-medium p-2 md:p-2">Energías renovables</div>
                </div>
            </div>
        </div>
    </div>
  )
}
