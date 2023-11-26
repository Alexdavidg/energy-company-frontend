import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Definimos el componente MainNavbar
export const MainNavbar = (props) => {
    const [brandColor, setBrandColor] = useState("text-onbackground");
    const [listColor, setListColor] = useState("text-onprimary");

    useEffect(() => {
        if (props.mode === "sub") {
            setBrandColor("text-onprimary");
        } else if (props.mode === "black") {
            setBrandColor("text-onbackground");
            setListColor("text-onbackground");
        } else if (props.mode === "white") {
            setBrandColor("text-onprimary");
            setListColor("text-onprimary");
        }
    }, [props.mode]);

    const isCliente = props.userRole === "cliente";
    const isEmpleado = props.userRole === "empleado";

    return (
        <div className="relative">
            <div className="absolute w-full h-fit flex flex-col md:flex-row place-items-center justify-between px-4 py-2 md:px-36 md:py-12 z-10">
                <div id="brandContainer">
                    <h1 className={`text-3xl font-semibold text-onbackground md:${brandColor}`}>EC</h1>
                </div>
                <div id="listContainer">
                    <ul className={`flex text-base gap-4 md:${listColor}`}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>

                        {/* Mostrar diferentes enlaces según el tipo de usuario */}
                        {isCliente && (
                            <li><Link to="/dashboard-cliente">| Dashboard Cliente |</Link></li>
                        )}

                        {isEmpleado && (
                            <li><Link to="/dashboard-empleado">| Dashboard Empleado |</Link></li>
                        )}

                        {/* Enlaces comunes para ingresar y login */}
                        {!isCliente && !isEmpleado && (
                            <>
                                <li><Link to="/ingresar">| Ingresar |</Link></li>
                                <li><Link to="/login">| Login |</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

