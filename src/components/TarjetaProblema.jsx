// Importamos los módulos necesarios de react-router-dom y react
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Definimos el componente TarjetaProblema
export const TarjetaProblema = (props) => {

  // Definimos los estados para la imagen, el título y la descripción del problema
  const [problemaImage, setProblemaImage] = useState("")
  const [problemaTitulo, setProblemaTitulo] = useState("")
  const [problemaDescripcion, setProblemaDescripcion] = useState("")
  const [problemaLink, setProblemaLink] = useState("")


  // Definimos los arrays para los títulos, descripciones e imágenes de los problemas
  let arrayTitulos = [
    "Agregar activos",
    "¿Se te fue la luz?",
    "¿El contador se dañó",
    "¿Aun no te llega la factura?",
    "¿Te cortaron la luz",
  ]

  let arrayDescripciones = [
    "Descripcion: se te fue la luz",
    "Descripcion: se daño el contador",
    "Descripcion: no te llega la factura",
    "Descripcion: te cortaron la luz",
  ]

  let arrayImagenes = [
    "https://media.istockphoto.com/id/688550958/es/vector/signo-de-negro-s%C3%ADmbolo-positivo.jpg?s=612x612&w=0&k=20&c=LyVTdpQ0VUUnhYVyY6Emy6CXx96dUOU9O7GXmEN_Vxo=",
    "https://vasalsuperoalacomer.com/comer/images/notas/01-sinluz-txt.jpg",
    "https://c8.alamy.com/compes/h0chh3/el-viejo-estilo-de-la-rueda-analogica-medidor-de-electricidad-h0chh3.jpg",
    "https://www.mapfre.com.pe/media/LUZ_ABRIDORA.jpg",
    "https://bogota.gov.co/sites/default/files/2022-02/medidores.jpg"
  ];

  let arrayLinks = [
    "/problemas/gestion",
    "/problemas/luz",
    "/problemas/contador",
    "/problemas/factura",
    "/problemas/corte",
  ]

  // Usamos useEffect para actualizar los estados en función del problema proporcionado a través de las props
  useEffect(() => {

    if (props.problem == "activos") {
      setProblemaImage(arrayImagenes[0])
      setProblemaTitulo(arrayTitulos[0])
      setProblemaDescripcion(arrayDescripciones[0])
      setProblemaLink(arrayLinks[0])
    }
    
    if (props.problem == "luz") {
      setProblemaImage(arrayImagenes[1])
      setProblemaTitulo(arrayTitulos[1])
      setProblemaDescripcion(arrayDescripciones[1])
    }

    if (props.problem == "contador") {
      setProblemaImage(arrayImagenes[2])
      setProblemaTitulo(arrayTitulos[2])
      setProblemaDescripcion(arrayDescripciones[2])
      
    }

    if (props.problem == "factura") {
      setProblemaImage(arrayImagenes[3])
      setProblemaTitulo(arrayTitulos[3])
      setProblemaDescripcion(arrayDescripciones[3])
      
    }

    if (props.problem == "corte") {
      setProblemaImage(arrayImagenes[4])
      setProblemaTitulo(arrayTitulos[4])
      setProblemaDescripcion(arrayDescripciones[4])
      
    }
    
  }, [props.problem])
  
  // Renderizamos el componente
  return (
    <div className="md:w-1/2 md:h-56 flex place-items-center  bg-primarycontainer rounded-2xl p-4 gap-4 transition-all ease-in-out duration-300">
        <div id="problemaImageContainer" className="w-36 h-36 md:w-48 md:h-48">
            <img className="w-full h-full object-cover rounded-2xl" src={problemaImage} alt="problemaEC"/>
        </div>
        <div id="servicioDescription" className="w-9/12 md:w-2/3 h-auto">
            <h1 className="text-[4.5vw] md:text-2xl font-medium text-onbackground">{problemaTitulo}</h1>
            <p className="text-onbackground mb-4">{problemaDescripcion}</p>
            <button className="primaryButton"><Link to={problemaLink}>Ingresar</Link></button>
        </div>
    </div>
  )
}
