// Importamos los módulos necesarios de react-router-dom y react
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Definimos el componente Servicio
export const Servicio = (props) => {

    // Definimos los estados para la imagen, el título, la descripción y el enlace del servicio
    const [servicioImage, setServicioImage] = useState("")
    const [servicioTitle, setServicioTitle] = useState("")
    const [servicioDescription, setServicioDescription] = useState("")
    const [servicioLink, setServicioLink] = useState("")

    // Definimos los arrays para los títulos, descripciones, imágenes y enlaces de los servicios
    let arrrayTitles = [
        "Crear factura",
        "¿Problemas?",
    ]

    let arrayDescriptions = [
        "Descripcion de factura.",
        "Descripcion de problemas.",
    ]

    let arrayImages = [
        "https://uploadgerencie.com/imagenes/requisitos-factura-soporte-costos.png",
        "https://www.luzdetexas.com/wp-content/uploads/electricity-meter-1.jpg"
    ]

    let arrayLinks = [
        "/servicios/factura",
        "/servicios/problemas",
    ]

    // Usamos useEffect para actualizar los estados en función del servicio proporcionado a través de las props
    useEffect(() => {

        if (props.service == "factura") {
            setServicioImage(arrayImages[0])
            setServicioTitle(arrrayTitles[0])
            setServicioDescription(arrayDescriptions[0])
            setServicioLink(arrayLinks[0])
            
        }

        if (props.service == "problemas") {
            setServicioImage(arrayImages[1])
            setServicioTitle(arrrayTitles[1])
            setServicioDescription(arrayDescriptions[1])
            setServicioLink(arrayLinks[1])
        }
      
    }, [props.service])
    
    // Renderizamos el componente
    return (
        <div className="md:w-1/2 md:h-64 flex place-items-center  bg-primarycontainer rounded-2xl p-4 gap-4 transition-all ease-in-out duration-300">
            <div id="servicioImageContainer" className="w-36 h-36 md:w-auto md:h-56">
                <img className="w-full h-full object-cover rounded-2xl" src={servicioImage} alt="serviciosEC"/>
            </div>
            <div id="servicioDescription" className="w-9/12 h-auto">
                <h1 className="text-xl font-medium text-onbackground mb-2">{servicioTitle}</h1>
                <p className="text-onbackground mb-4">{servicioDescription}</p>
                <button className="primaryButton"><Link to={servicioLink}>Ingresar</Link></button>
            </div>
        </div>
    )
}
