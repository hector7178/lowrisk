import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import NavBar from '@/Components/NavBar';
import Carousel from '@/Components/carrusel';

export default function Guest({ children, carousel, text, tittle,pag }) {
    
    return (
    <div  className=" flex h-screen sm:h-auto flex-col">
    <NavBar className='' pag={pag==='register'||pag==='register2'? true :pag==='ISesion'?false:'other'} />
        <div className=" bg-regal h-full grid md:grid-cols-2  justify-center ">
           <div className=" hidden justify-start items-center gap-4  flex-col md:flex p-10">
           {children[1]}
           {text?<Carousel carousel={carousel} time={7000} />:null}
           </div>

                <div className={`w-full h-screen bg-white justify-center shadow-md ${pag==='register2'?'sm:p-6  p-4  lg:p-8':'sm:p-19  p-14  lg:p-24'} gap-6 flex flex-col`}>
                <div  className='text-center w-full flex flex-col gap-2'>
                    <h2 className='text-2xl md:text-tittle text-regal font-semibold'>{tittle.head}</h2>
                    <h2 className='text-lg md:text-xl text-blu'>{tittle.body}</h2>
                </div>
                
                {children[3]}
            </div>
        </div>
    </div>
    );
}
