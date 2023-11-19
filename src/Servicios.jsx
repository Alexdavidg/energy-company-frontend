import { MainNavbar } from "./components/MainNavbar"
import { Servicio } from "./components/Servicio"

export const Servicios = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col bg-primary">
        <MainNavbar mode='white'/>
        <section id="servicios" className="w-full h-[100vh] px-4 py-32 md:px-36 md:py-36">
            <div id="serviciosTitlesContainer">
                <h1 className="font-medium text-[10vw] md:text-6xl text-onprimary mb-4 leading-none">Servicios</h1>
                <p className="text-onprimary md:text-2xl md:w-[30vw]">En esta pagina encontraras los servicios que están a tu disposición. </p>
            </div>
            <div id="serviciosContainer" className="w-full flex flex-col md:flex-row mt-8 gap-4">
                <Servicio service="problemas"/>
            </div>
        </section>
        
    </div>
  )
}
