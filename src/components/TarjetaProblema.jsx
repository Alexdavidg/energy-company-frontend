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
    "Vehiculos",
    "Edificios",
    "Generadores"
  ]

  let arrayDescripciones = [
    "Gestiona los vehiculos",
    "Gestiona los edificios",
    "Gestiona los generadores"
  ]

  let arrayImagenes = [
    "https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-car-line-icon-vector-png-image_1772261.jpg",
    "https://cdn.icon-icons.com/icons2/3021/PNG/512/office_buildings_building_city_offices_icon_188687.png",
    "https://cdn-icons-png.flaticon.com/512/1546/1546765.png"
  ];

  let arrayLinks = [
    "/problemas/gestion",
    "/problemas/edificio",
    "/problemas/generator"
  ]

  // Usamos useEffect para actualizar los estados en función del problema proporcionado a través de las props
  useEffect(() => {

    if (props.problem == "vehiculos") {
      setProblemaImage(arrayImagenes[0])
      setProblemaTitulo(arrayTitulos[0])
      setProblemaDescripcion(arrayDescripciones[0])
      setProblemaLink(arrayLinks[0])
    }
    
    if (props.problem == "edificios") {
      setProblemaImage(arrayImagenes[1])
      setProblemaTitulo(arrayTitulos[1])
      setProblemaDescripcion(arrayDescripciones[1])
      setProblemaLink(arrayLinks[1])
    }

    if (props.problem == "generator") {
      setProblemaImage(arrayImagenes[2])
      setProblemaTitulo(arrayTitulos[2])
      setProblemaDescripcion(arrayDescripciones[2])
      setProblemaLink(arrayLinks[2])
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
