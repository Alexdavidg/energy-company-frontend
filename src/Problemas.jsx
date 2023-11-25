import { MainNavbar } from "./components/MainNavbar"
import { TarjetaProblema } from "./components/TarjetaProblema"


export const Problemas = () => {
  return (
    <div id='gestionContainer2' className="relative w-[100vw] h-fit md:h-[100vh] flex flex-col px-4 bg-background overflow-x-hidden">
        <MainNavbar mode="black"/>
        <div className="body">
        <section id="problemas" className="w-full h-[100vh] px-4 py-32 md:px-36 md:py-36">
            <div id="problemasTitlesContainer">
                <h1 className="font-medium text-[10vw] md:text-6xl text-onbackground mb-4 leading-none">Activos</h1>
                <p className="text-onbackground md:text-2xl md:w-[30vw]">Cuentanos ¿En que podemos ayudarte?</p>
            </div>
            <div id="problemasContainer" className="w-full flex flex-col mt-8 gap-4">
              <div id="tarjetasFila" className="w-full flex flex-col md:flex-row gap-4">
                <TarjetaProblema problem="vehiculos"/>
                <TarjetaProblema problem="edificios"/>
                <TarjetaProblema problem="generator"/>
              </div>
            </div>
        </section>
        </div>
    </div>
  )
}

