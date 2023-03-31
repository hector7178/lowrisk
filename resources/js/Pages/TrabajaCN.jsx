import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,useForm } from '@inertiajs/inertia-react';
import NavBar from '@/Components/NavBar';
import Trabaja from '@/Components/svg/Trabaja';
import { Fragment, useState,useRef, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon, ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from '@/Components/TextInput';
import PrimaryButton  from '@/Components/PrimaryButton';

export default function About(props) {

    const recaptchaRef = useRef();
    const fileUpload = useRef();

    console.log(recaptchaRef.current )

    const { data, setData, post, processing, errors, reset, progress } = useForm({
        nombre:'',
        apellido:'',
        telefono:'',
        correo:'',
        carta:'',
        captchaValid:true
        
    })
    const [Archivos, setarchivos]= useState([])

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value)
  
    }

    const [verArchivos, setVerArchivos]=useState(false)
    const ver=()=>{
        setVerArchivos((prev)=>!prev)
    }
    console.log(data)
    const fileChange=(event)=>{
        const s=event.target.files
        const arrayFile=Array.from(s)
        setarchivos(arrayFile)
        
        setData(event.target.name, s)
    }

console.log(fileUpload)




    
    const onSubmit = (e) => {
    e.preventDefault();
    post(route('workwithus.store'));
    
    }

    function onChange(value) {
        console.log("Captcha value:". value);
    }

    const [select,setSelect]=useState('')

    

    return (
        <>
            <Head title="Trabaja con nosotros" />
            <NavBar props={props.auth.user}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
                    <div className="flex flex-col h-fit items-center justify-items-center overflow-hidden ">
                            <div className=' md:hidden flex flex-col p-4 gap-6'>
                                <h1 className=' text-2xl sm:text-[3.5em] text-regal text-center font-bold'>Ofertas de empleo</h1>
                                <div className='flex flex-col justify-items-center'  >
                                    <div className='flex text-center justify-center'>
                                        <h2 className=' text-lg text-blu'>portal de empleo para  &nbsp;</h2><h3 className=' text-xl text-blu'>trabajar con nosotros</h3>
                                    </div>
                                    <div className='flex text-center justify-center'>
                                        <h3 className=' text-lg text-blu'>¿quieres trabajar en el  &nbsp;</h3><h3 className=' text-lg text-blu'>empleo de tu sueños?</h3>
                           
                                    </div>
                                
                                </div>
                            
                            </div>
                       
                       
                        <div className="hidden md:grid grid-cols-2 h-screen">
                            <div className='grid grid-rows-5 h-[80vh] p-8   w-full'>
                            <div className='flex flex-col md:p-4 gap-6 text-center row-span-2'>
                                <h1 className=' text-2xl sm:text-[3.5em] text-regal font-bold lg:text-start'>Ofertas de empleo</h1>
                                <div className='flex flex-col'  >
                                    <div className='flex text-center lg:text-start'>
                                        <h2 className=' text-lg text-blu'>portal de empleo para  &nbsp;</h2><h3 className=' text-xl text-blu'>trabajar con nosotros</h3>
                                    </div>
                                    <div className='flex text-center lg:text-start'>
                                        <h3 className=' text-lg text-blu'>¿quieres trabajar en el  &nbsp;</h3><h3 className=' text-lg text-blu'>empleo de tu sueños?</h3>
                           
                                    </div>
                                
                                </div>
                            
                            </div>
                            <div className=' flex flex-col gap-4 row-span-3'>
                                            <Disclosure >
                                            {({ open }) => (
                                               
                                                <div className={select==='1' ?'w-[80%] shadow-xl rounded-md ease-in duration-300':'ease-in duration-300 w-[80%]'} >
                                                <Disclosure.Button onClick={()=>{select==='1' ?setSelect(''):setSelect('1')}} className='flex justify-between  w-full p-4 text-lg items-center'>
                                                <div className='flex text-lg items-center gap-x-4'> 
                                                    <div className='w-[8vh] h-[8vh] flex text-2xl rounded-md items-center justify-center text-white bg-blu-2 font-extrabold'>01</div>
                                                    Inscribete
                                                </div>
                                                <ChevronRightIcon className={select==='1' ? ' w-[2rem]  transform rotate-90' : '  animate-bounce  w-[2rem]'} />
                                               </Disclosure.Button>
                                                <Transition
                                                    show={select==='1' ?true:false}
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    
                                                    <Disclosure.Panel  className='ease-in duration-300 p-6' static>
                                                    Incribete en nuestro portal de empleo para optar a el trabajo de tu sueños
                                                    </Disclosure.Panel>
                                                </Transition>
                                                </div>
                                            )}
                                            </Disclosure>
                                            <Disclosure>
                                                
                                            {({ open }) => (
                                                <div className={select==='2' ?'w-[80%] shadow-xl rounded-md ease-in duration-300':'ease-in duration-300 w-[80%]'} >
                                                <Disclosure.Button onClick={()=>{select==='2' ?setSelect(''):setSelect('2')}} className='flex justify-between  w-full p-4 text-lg items-center'>
                                                <div className='flex text-lg items-center gap-x-4'> 
                                                    <div className='w-[8vh] h-[8vh] flex text-2xl rounded-md items-center justify-center text-white bg-blu-2 font-extrabold'>02</div>
                                                   Contamos contigo
                                                </div>
                                                <ChevronRightIcon className={select==='2'? '  transform rotate-90 w-[2rem]' : 'animate-bounce  w-[2rem]'} />
                                                </Disclosure.Button>
                                                <Transition
                                                    show={select==='2'?true:false}
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    
                                                    <Disclosure.Panel  className='ease-in duration-300 p-6' static>
                                                    Incribete en nuestro portal de empleo para optar a el trabajo de tu sueños
                                                    </Disclosure.Panel>
                                                </Transition>
                                                </div>
                                            )}
                                            </Disclosure>
                                             <Disclosure>
                                            {({ open }) => (
                                                <div className={select==='3' ?'w-[80%] shadow-xl rounded-md ease-in duration-300':'ease-in duration-300 w-[80%]'} >
                                                <Disclosure.Button onClick={()=>{select==='3' ?setSelect(''):setSelect('3')}} className='flex justify-between  w-full p-4 text-lg items-center'>
                                                <div className='flex text-lg items-center gap-x-4'> 
                                                    <div className='w-[8vh] h-[8vh] flex text-2xl rounded-md items-center justify-center text-white bg-blu-2 font-extrabold'>03</div>
                                                    Iremos contigo
                                                </div>
                                                <ChevronRightIcon className={select==='3'  ? 'transform w-[2rem] rotate-90' : ' animate-bounce   w-[2rem]'} />
                                                </Disclosure.Button>
                                                <Transition
                                                    show={select==='3'?true:false}
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    
                                                    <Disclosure.Panel  className='ease-in duration-300 p-6' static>
                                                    Incribete en nuestro portal de empleo para optar a el trabajo de tu sueños
                                                    </Disclosure.Panel>
                                                </Transition>
                                                </div>
                                            )}
                                            </Disclosure>
                                            <Disclosure>
                                            {({ open }) => (
                                                <div className={select==='4' ?'w-[80%] shadow-xl rounded-md ease-in duration-300':'w-[80%] ease-in duration-300'} >
                                                <Disclosure.Button onClick={()=>{select==='4' ?setSelect(''):setSelect('4')}} className='flex justify-between  w-full p-4 text-lg items-center'>
                                                <div className='flex text-sm sm:text-lg items-center gap-x-4'> 
                                                    <div className='w-[8vh] h-[8vh] flex text-2xl rounded-md items-center justify-center text-white bg-blu-2 font-extrabold'>04</div>
                                                    Trabaja con nosotros
                                                </div>
                                                <ChevronRightIcon className={select==='4' ? ' transform rotate-90 w-[2rem]' : ' animate-bounce  w-[2rem]'} />
                                                </Disclosure.Button>
                                                <Transition
                                                    show={select==='4' ?true:false}
                                                    enter="transition duration-100 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-75 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    
                                                    <Disclosure.Panel  className='ease-in duration-300 p-6' static>
                                                    Incribete en nuestro portal de empleo para optar a el trabajo de tu sueños
                                                    </Disclosure.Panel>
                                                </Transition>
                                                </div>
                                            )}
                                            </Disclosure>
                                            </div>
                                   
                            </div>
                            <div className='img '>
                            <Trabaja width='50vw' height='60vh'/>
                            </div>

                        </div>
                        <div className="md:p-8 h-screen w-[80vw] ">
                            <div className=" h-full w-full relative  flex justify-center items-start  py-6">
                                <form onSubmit={onSubmit}  encType='multipart/form-data' className='p-6 md:py-10 w-[90%] h-[70%] grid grid-cols-2 rounded-md shadow-xl bg-gray-200 '>
                                    <div className='grid grid-rows-7 '>

                                        <div className='w-full flex flex-col'>
                                        <label className='p-2' htmlFor="nombre">{errors.nombre}</label>
                                            <TextInput type="text" name="nombre" placeholder='Nombre' id="nombre" handleChange={onHandleChange}  className='border-transparent shadow-lg w-[90%] rounded-md'/>
                                        </div>
                                        <div className='w-full flex flex-col'>
                                            <label className='p-2' htmlFor="apellido">{errors.apellido}</label>
                                            <TextInput type="text" name="apellido" placeholder='Apellido' id="apellido" handleChange={onHandleChange}   className='border-transparent shadow-lg w-[90%] rounded-md'/>
                                        </div>
                                        <div className='w-full flex flex-col'>
                                            <label className='p-2' htmlFor="telefono">{errors.telefono}</label>
                                            <TextInput type="number" name="telefono" placeholder='Teléfono' id="telefono" handleChange={onHandleChange}   className='border-transparent shadow-lg w-[90%] rounded-md'/>
                                        </div>
                                        <div className='w-full flex flex-col'>
                                            <label className='p-2' htmlFor="correo">{errors.correo}</label>
                                            <TextInput type="email" name="correo" placeholder='Correo'  id="correo" handleChange={onHandleChange} className='border-transparent shadow-lg w-[90%] rounded-md'/>
                                        </div>
                                        <div  className='w-full flex flex-col h-full row-span-1 mt-2'>
                                            <label htmlFor="Archivos"  className='p-2 row-span-1 border-blu text-blu bg-white border-dashed border-2 w-[90%] rounded-lg flex justify-between'>Subir archivos<span><ArrowDownTrayIcon/></span></label>
                                            <input type="file" ref={fileUpload} name="Archivos[]" id="Archivos" className='bg-white w-1/2 text-blu rounded-md' onChange={fileChange} multiple hidden/>
                                            {
                                            Archivos.length > 0 ?
                                                        verArchivos?
                                                            <div className='overflow-y-auto flex flex-col row-span-2 h-[5rem] rounded-lg overflow-hidden border-blu border-2 relative z-10 w-[90%] '>
                                                            <div className='bg-regal w-full flex justify-content-end p-1'>
                                                            <button className='hover:bg-blu p-1 rounded-md text-white font-bold' onClick={ver}>X</button>
                                                            </div>
                                                                {Archivos.map((s, index)=>{
                                                                    return(
                                                                        <div className='flex-row p-1 flex justify-between w-full border-blu border-2 bg-gray-200 '>
                                                                            <h4>{s.name}</h4>
                                                                            <div></div>
                                                                        </div>
                                                                    )
                                                                    })}  
                                                            </div>  
                                                        :
                                                            <button className='bg-regal w-1/2 p-2 mt-2 rounded-md text-white' onClick={ver}>Ver archivos</button>
                                            :
                                            null

                                            }
                                            
                                            
                                        </div>
                                        <div >
                                            <ReCAPTCHA
                                                className='absolute top-3/4'
                                                ref={recaptchaRef}
                                                sitekey="6LfXZJMkAAAAADarhdP9IJ7SxTTgnCTwFCduMngl"
                                                onChange={onChange}
                                            />
                                        </div>
                                        <PrimaryButton 
                                        className='font-extrabold absolute text-white top-[90%] left-0 bg-regal rounded-md w-[4rem] ml-[7%] sm:text-lg h-[10%]'
                                        processing={processing}>
                                            Enviar
                                        </PrimaryButton> 
                                    </div>
                                    <div>
                                        <textarea name="carta" id="carta" onChange={onHandleChange}  cols="28" rows="9" placeholder={'Escribe tu carta aqui...'}  className='border-transparent shadow-lg rounded-md w-full h-[90%]'></textarea>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}
