import { MainNavbar } from "./components/MainNavbar"


export const Nosotros = () => {
  return (
    <div className="bg-[#E0E0F9] text-[#181A2C]">
        <MainNavbar mode="black"/>
        <div className="px-4 py-20 md:py-36 md:px-44"> 
            <div id="principalTextContainer" className="my-4" >
                <h1 className="text-4xl md:text-6xl font-medium md:mb-2">Bienvenido a Energy Company</h1>
                <p className="md:text-3xl"> ¡Bienvenido a la página web de Energy Company! </p>
            </div>     
            <img src="https://static.educaweb.com/img/news/20211027-empleo-energiarenovable.jpg" className="w-full rounded-2xl mb-4"/>
            <p className="mb-4 text-xl">
                Estamos encantados de que nos hayas visitado y te damos una cálida 
                bienvenida a nuestro sitio web. En Energy Company, nuestro compromiso es proporcionar 
                energía confiable y sostenible para satisfacer tus necesidades y las de tu comunidad.
            </p>
            <p className="mb-4 text-xl">
                Como una empresa líder en el sector energético, estamos dedicados a brindarte un servicio 
                excepcional, opciones de energía limpia y soluciones innovadoras que se adapten a tu estilo 
                de vida y a tus objetivos de sostenibilidad.
            </p> 
            <p className="mb-4 text-xl">
                En esta plataforma, encontrarás una amplia variedad de información, recursos y herramientas
                que te ayudarán a conocer más sobre nuestros servicios, conocer tus opciones de suministro 
                de energía y tomar decisiones informadas para ahorrar energía y reducir tu huella de carbono. 
                Ya sea que busques soluciones para tu hogar, tu negocio o tu comunidad, estamos aquí para 
                ofrecerte el apoyo que necesitas.
            </p>
            <p className="mb-4 text-xl">
                Navega por nuestro sitio para descubrir cómo puedes aprovechar al máximo nuestros servicios, 
                obtener información sobre nuestras fuentes de energía renovable, conocer más sobre nuestros 
                programas de eficiencia energética y encontrar respuestas a tus preguntas más frecuentes.
            </p>
            <p className="mb-4 text-xl">
                En Energy Company, no solo brindamos electricidad y gas natural, sino que también
                compartimos nuestro compromiso con un futuro más limpio y sostenible. Acompáñanos en
                este viaje hacia un mundo más ecológico y energéticamente eficiente. Estamos aquí para
                ayudarte en cada paso del camino.
            </p> 
            <p className="mb-4 text-xl">
                ¡Gracias por visitar nuestro sitio web y confiar en nosotros como tu compañía de energía de confianza! Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estamos aquí para servirte.
            
                Atentamente,
                El equipo de Energy Company 
            </p>
        </div>
    </div>
  )
}
