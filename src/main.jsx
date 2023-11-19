// Importamos los módulos necesarios de React y ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importamos los componentes de enrutamiento de react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Importamos los componentes de nuestra aplicación
import App from './App.jsx'
import { Servicios } from './Servicios.jsx'
import { Problemas } from './Problemas.jsx'
import { Nosotros } from './Nosotros.jsx'
import Gestion from './gestion.jsx'
import Ingresar from './Ingresar.jsx'
import Login from './Login.jsx'

// Creamos el enrutador de nuestra aplicación con las rutas correspondientes
const router = createBrowserRouter([
  {
    path: '/', // Ruta de la página principal
    element: <App />, // Componente a renderizar cuando se accede a la página principal
  },
  {
    path: '/servicios', // Ruta de la página de servicios
    element: <Servicios />, // Componente a renderizar cuando se accede a la página de servicios
  },
  {
    path: '/servicios/problemas', // Ruta de la página de problemas
    element: <Problemas />, // Componente a renderizar cuando se accede a la página de problemas
  },
  {
    path: 'nosotros', // Ruta de la página sobre nosotros
    element: <Nosotros />, // Componente a renderizar cuando se accede a la página sobre nosotros
  },
  {
    path: 'problemas/gestion',
    element: <Gestion/>
  },
  {
    path: 'Ingresar',
    element: <Ingresar/>
  },
  {
    path: 'Login',
    element: <Login/>
  }
])

// Renderizamos nuestra aplicación dentro del elemento con id 'root' en nuestro HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
