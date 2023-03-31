
import { Head } from '@inertiajs/inertia-react';
import NavBar from '@/Components/NavBar';
import ContactSvg from '@/Components/svg/ContactSvg';
import { EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid';


export default function Contact(props) {
    
    return (
       <>
            <Head title="Contact us" />
            <NavBar props={props.auth.user}/>

            <div className="p-8 md:p-16">
                <div className='grid md:grid-cols-2 h-screen'>
                    <div className='hidden md:flex flex-col h-full gap-6 p-4'>
                        <div className='flex flex-col p-8 gap-4 h-1/4'>
                            <h3 className='text-xl text-white bg-blu p-2 rounded-md w-fit'>Contacto</h3>

                            <div className='flex flex-row gap-2'>
                                <EnvelopeIcon className='text-regal w-[2.5rem] bg-blu-3 py-1 px-2 rounded-md'/>
                                <h3 className='text-md lg:text-lg text-regal bg-blu-3 p-2 rounded-md w-fit'>lowrisk@lowrisk.com</h3>
                            </div>

                            <div className='flex flex-row gap-2'>
                                <MapPinIcon className='text-regal w-[2.5rem] bg-blu-3 py-1 px-2 rounded-md'/>
                                <h3 className='text-md  lg:text-lg text-regal bg-blu-3 p-2 rounded-md w-fit'> <span></span> Expertos en cada rincón de españa</h3>
                            </div>

                             </div>
                        <div className='flex items-center justify-center h-3/4 '>
                            <ContactSvg className='h-full'/>
                        </div>
                    </div>
                    <div className='flex flex-col h-full items-center  gap-6'>
                        <div className='flex flex-col text-center p-4 gap-4'>
                            <h3 className='text-2xl md:text-tittle text-regal '>Contáctanos</h3>
                            <h3 className='text-regal text-md md:text-lg'>Póngase en contacto con <span className='text-blu text-md md:text-lg'>LOWRISK MANAGEMENT S.L.</span> </h3>
                        </div>
                        <form className='flex flex-col shadow-md rounded-lg gap-4 md:justify-center py-10 md:py-4 md:p-4 items-center relative bg-blu-3 w-[85%] h-[70%] lg:h-1/2'>
                            <div  className='w-[85%] flex flex-col   bg-blu-3 text-regal'>
                                <label>Nombre</label>
                                <input className='border-blu bg-blu-3 rounded-lg' type='text' placeholder='Nombre'></input>
                            </div>
                            
                            <div className='w-[85%] flex flex-col  bg-blu-3 text-regal'>
                                <label>Email</label>
                                <input className='border-blu bg-blu-3 rounded-lg' placeholder='correo' type='email'></input>
                            </div>
                            <div className='w-[85%] flex flex-col  bg-blu-3 text-regal'>
                                <label>Mensaje</label>
                                <textarea className='border-blu bg-blu-3 rounded-lg' placeholder='Mensaje...' cols="30" rows="4" type='text'></textarea>
                            </div>
                            <input className=' bg-regal text-white font-600 px-4 py-2 rounded-md w-fit h-fit' type='submit' value='Enviar'></input>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
