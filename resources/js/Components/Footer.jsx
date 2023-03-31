import { Link } from "@inertiajs/inertia-react";
import Logo from "./svg/Logo";



export default function Footer(props) {
    return(

        <div className="h-[60%] md:h-1/2 w-full bg-gray-200 grid md:grid-cols-4 justify-items-center grid-cols-2 p-6 md:p-10 relative" >
        
        
            <div className="flex flex-col w-full gap-4 p-4">
            <Logo/>
            <h4 className="text-regal text-xs md:text-sm ">LOWRISK MANAGEMENT S.L.</h4>

            </div>
            <div className="flex flex-col  text-center gap-4 ">
                <Link className="text-md text-blu font-bold">Navegación</Link>
                <Link className="text-regal text-xs md:text-sm ">Inicio</Link>
                <Link className="text-regal text-xs md:text-sm ">Registrate</Link>
                <Link className="text-regal text-xs md:text-sm ">Iniciar Sesión</Link>
                <Link className="text-regal text-xs md:text-sm ">FAQ</Link>

            </div>
            <div className="flex flex-col  text-center gap-4">
                <Link className="text-md text-blu font-bold">Funcionalidades Extra</Link>
                <Link className="text-regal text-xs md:text-sm ">Calculo de hipoteca</Link>
                <Link className="text-regal text-xs md:text-sm ">Formularios</Link>
                <Link className="text-regal text-xs md:text-sm ">Aplicacion PWA</Link>
                

            </div>
            <div className="flex flex-col text-center gap-4 ">
                <Link className="text-md text-blu font-bold">Nosotros</Link>
                <Link className="text-regal text-xs md:text-sm ">Contactanos</Link>
                <Link className="text-regal text-xs md:text-sm ">Trabaja con nosotros</Link>
                

                
            </div>
            
            
        </div>


        )
}