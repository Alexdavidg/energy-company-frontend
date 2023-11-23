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
    "Edita o elimina el activo",
  ]

  let arrayDescripciones = [
    "Quiere Agregar un Activo?",
    "Edita o elimina el activo",
  ]

  let arrayImagenes = [
    "https://media.istockphoto.com/id/688550958/es/vector/signo-de-negro-s%C3%ADmbolo-positivo.jpg?s=612x612&w=0&k=20&c=LyVTdpQ0VUUnhYVyY6Emy6CXx96dUOU9O7GXmEN_Vxo=",
    "https://static.vecteezy.com/system/resources/thumbnails/000/380/520/small/Basic_Elements__28122_29.jpg",
  ];

  let arrayLinks = [
    "/problemas/gestion",
    "/problemas/edit",
  ]

  // Usamos useEffect para actualizar los estados en función del problema proporcionado a través de las props
  useEffect(() => {

    if (props.problem == "activos") {
      setProblemaImage(arrayImagenes[0])
      setProblemaTitulo(arrayTitulos[0])
      setProblemaDescripcion(arrayDescripciones[0])
      setProblemaLink(arrayLinks[0])
    }
    
    if (props.problem == "edit") {
      setProblemaImage(arrayImagenes[1])
      setProblemaTitulo(arrayTitulos[1])
      setProblemaDescripcion(arrayDescripciones[1])
      setProblemaLink(arrayLinks[1])
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
