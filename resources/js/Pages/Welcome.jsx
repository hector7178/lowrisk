import { Link, Head } from '@inertiajs/inertia-react';
import NavBar from '@/Components/NavBar';
import Homeh from '@/Components/svg/Home_h';
import Homef from '@/Components/svg/Home_f';
import { useEffect, useState, useRef } from 'react';
import { 

    ArrowTopRightOnSquareIcon,
    PresentationChartLineIcon,
    DocumentMinusIcon,
    BanknotesIcon,
    FlagIcon,
    FolderOpenIcon,
    ClockIcon,
    ChartBarSquareIcon,
    MapIcon,
    CalculatorIcon,
    UserIcon,
    BuildingLibraryIcon,
    ChevronDoubleDownIcon,
    ChevronRightIcon,
    ChevronLeftIcon

} from '@heroicons/react/24/outline';
import Regalo from '@/Components/svg/Regalo';
import Descarga from '@/Components/svg/Descarga';
import M_glb from '@/Components/svg/M_glb';
import M_te from '@/Components/svg/M_te';
import M_cf from '@/Components/svg/M_cf';
import M_b from '@/Components/svg/M_b';
import H_be from '@/Components/svg/H_be';
import H_bas from '@/Components/svg/H_bas';
import Dron from '@/Components/svg/Dron';


// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules

import { Autoplay, Pagination, Navigation, EffectCards} from "swiper";
import Footer from '@/Components/Footer';



export default function Welcome(props) {
    const [transitionImg , setTransition]=useState(1)
    const [div2 , setDiv2]=useState('')
    const [div1R , setDiv1R]=useState('')

    const div1Ref=useRef()
    const div2Ref=useRef()
    useEffect(()=>{
        const div1= div1Ref.current
           const handleScroll= ()=>{
                let y =div1.getBoundingClientRect().y>=0?div1.getBoundingClientRect().y:0 
                let f=(y/3).toFixed()
                setDiv1R(f)
                console.log(div1R)
            }
        const div2=div2Ref.current
            const handleScroll2=()=>{
                let y =div2.getBoundingClientRect().y>=0?div2.getBoundingClientRect().y:0
                let f=(y/3).toFixed()
                setDiv2(f)

            }


            window.addEventListener('scroll', handleScroll)
            window.addEventListener('scroll', handleScroll2)
            return () =>{
                window.removeEventListener('scroll', handleScroll),
                window.removeEventListener('scroll', handleScroll2)

            }
    }, [])

   
      
      const carousel= [
        {head:<PresentationChartLineIcon  className='ease-out animate-slow'/>,
        body:'Convertimos sus Costes Fijos en Variables.'},
        {head:<DocumentMinusIcon className='ease-out animate-slow'/>,
        body:'Reducimos Costes Totales.'},
        {head:<BanknotesIcon/>,
        body:'Usted se lleva la comisión por tramitación de la vivienda a hipotecar.'},
        {head:<FlagIcon className='ease-out animate-slow'/>,
        body:'Sin permanencia.'},
        {head:<FolderOpenIcon className='ease-out animate-slow'/>,
        body:'Aportamos decenas de hojas de información.'},
        {head:<ClockIcon className='ease-out animate-slow'/>,
        body:'Sabrá el resultado en menos de 3 minutos de cuestionario.'},
        {head:<ChartBarSquareIcon className='ease-out animate-slow'/>,
        body:'No tendrá que esperar a un Asesor Financiero para simular una hipoteca o alquiler.'},
        {head:<MapIcon className='ease-out animate-slow'/>,
        body:' Tendrá cobertura nacional para cualquier préstamo hipotecario, alquiler o reunificación de deudas.'},
        {head:<CalculatorIcon className='ease-out animate-slow'/>,
        body:'Nuestro simulacro de hipoteca, alquiler o reunificación de deudas lucha por dar las cifras al céntimo y personalizadas para cada perfil de cliente de su inmobiliaria. '},
        {head:<UserIcon className='ease-out animate-slow'/>,
        body:'Puede contar con nosotros si es un inversor privado.'},
        {head:<BuildingLibraryIcon className='ease-out animate-slow'/>,
        body:'Podrá elegir hasta la hipoteca perfecta para cada piso o perfil de cliente de entre todos los bancos españoles. '}
       
        ]

        const [index, setIndex] = useState(0);
        const keys = carousel.map((child, index) => index);

        useEffect(() => {
        const interval = setInterval(() => {
           
            setTransition((e)=>e+1)
            const newIndex = (index + 1) % keys.length;
            setIndex(newIndex);
        }, 7000);
        return () => clearInterval(interval);
      });
      
  
        
    
    return (
        <>
       
            <Head title="Lowrisk" />
            <NavBar props={props.auth.user}/>
            <div className=" w-full h-screen snap-y">
                <div className="snap-center w-full h-full grid md:grid-cols-2 bg-slate-50 p-8 overflow-hidden">
                    <div className=" p-8 md:p-9 grid content-start grid-cols-1 gap-4 ">
                        <h1 className='text-2xl lg:text-tittle text-regal font-bold'> 
                        Calcule la hipoteca de sus clientes o el mejor perfil para pisos de alquiler.
                        </h1> 
                        <h2 className='text-lg md:text-xl text-gray-500' >
                        
                        Somos intermediarios financieros inmobiliarios especializados en el mundo hipotecario y en pisos de alquiler.
                        </h2>
                        <div className='bg-slate-300 text-md flex flex-row rounded-lg gap-2 p-2 justify-between text-blu w-fit  h-10' >
                        <Link className=' flex  text-blu items-center  w-full h-full'>
                            Calcular hipotecas
                        </Link>
                        <ArrowTopRightOnSquareIcon />
                        </div>
                        <Homef className='absolute -right-0 bottom-0 md:hidden h-[40%] w-[60%] sm:h-[40%] sm:w-[30%]' />
                    </div>
                    <div className=" p-9 hidden md:flex ease-out animate-slow duration-750">
                    
                        {(transitionImg % 2 ===0) ?<Homeh className='left ease-out animate-slow duration-750"' width='100%' height='100%'/>:<Homef className='right duration-750" ease-out animate-slow' width='100%' height='50%'/>}

                       
                    </div>
                    <ChevronDoubleDownIcon className='animate-bounce w-[5%] h-[2rem] text-blu absolute bottom-0 left-[48%]'/>
                    
                </div>
                
                
                <div className="snap-center  w-full h-full flex flex-col bg-white items-center p-4 md:p-12 overflow-hidden">
                     
                     {index<=6?
                    <div className="p-2 md:p-4 w-full  sm:w-3/4 text-2xl h-1/4 font-bold">
                       <h3 className="text-2xl text-center text-regal">Hemos resumido su conocimiento hipotecario en un sistema informático.</h3>
                    </div>:
                    <div className="p-2 md:p-4 w-full  sm:w-3/4 text-2xl h-1/4 font-bold">
                    <h3 className="text-2xl text-center text-regal">Ya sea una inmobiliaria o un inversor privado, aportamos valor añadido.</h3>
                     </div>
                    }
                       
                        <div className="  grid  h-3/4 sm:gap-4 sm:p-4  justify-center align-center"> 
                        <Swiper
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                }}
                            pagination={{
                                clickable: true,
                                }}
                                
                            effect={"cards"}
                            grabCursor={true}  
                            navigation={{
                                nextEl:'.swiper-button-next',
                                prevEl:'.swiper-button-prev',
                                clickable:true,
                            }}
                            modules={[Autoplay, Pagination, Navigation,EffectCards]}
                            className=' w-[70vw] sm:w-[40vw] gap-4 h-[50vh]  relative rounded-xl'
                            >
                                
                                {carousel.map((text, index)=>{
                          return ( 
                          
                                <SwiperSlide key={index}  className='shadow-xl rounded-xl'>
                                    <div  className="grid  grid-rows-3 justify-items-center bg-[#e9f0fb] items-center rounded-xl lg h-full w-full p-6 pt-12  relative">
                                        <div className="flex ease-out animate-slow w-1/2 text-blu justify-center h-full content-center row-span-1">
                                            {carousel[index].head}
                                        </div>
                                        <div className="text-xs ease-out animate-slow md:text-sm text-center row-span-2" >
                                        <h3 className="text-sm ease-out animate-slow text-regal text-center">{carousel[index].body}</h3> 
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            )
                        })}
                        <div className='w-full hidden md:flex h-1/4  flex-row justify-between absolute top-0'>
                            <div className='swiper-button-prev slider-arrow w-[5vw] h-[5vh] absolute -left-1/2 '>
                                <ChevronLeftIcon className='text-regal  hover:scale-2 animate-ping_Izq hover:animate-none'/>
                            </div>
                            <div className='swiper-button-next slider-arrow  w-[5vw] h-[5vh] absolute -right-1/2 '>
                                <ChevronRightIcon className='text-regal hover:scale-2 animate-ping_Der hover:animate-none'/> 
                            </div>
                        </div>
                        
                        </Swiper>

                        </div>
            
                
                
                 
                </div>

                <div ref={div1Ref} className=" w-full h-full bg-blu overflow-hidden">
                    <div className="grid md:grid-cols-2 justify-items-center h-full items-center ">
                        <div className="h-full flex gap-6 p-8 flex-col relative transition duration-750 ease-in-out delay-75" style={div1R<60?{transform:`translateX(0px)`}:{transform:`translateX(-200%)`}}>
                            <h3 className='text-white'></h3>
                            <h3 className='text-white text-lg md:text-xl lg:text-3xl font-bold'>Le regalamos asesoramientos inmobiliarios.</h3>
                            <h3 className='text-white  text-sm md:text-md lg:text-xl'>Estamos tan seguros de que nuestro simulador de préstamo hipotecario le va a cambiar la vida…que le regalamos 10 asesoramientos.</h3>
                            <div className='text-white flex-col flex gap-4 h-1/2 w-full md:w-full relative z-10 '>
                                <h3 className='text-[#92a5e8] font-bold  md:text-lg lg:text-2xl delay-100'>¿A quién va dirigido?</h3>
                                <h3 className='text-white md:text-sm text-xs lg:text-lg p-4 bg-[#4A69D9] rounded-lg'>A cada Inmobiliaria (tenga o no tenga ya un Intermediario Financiero asociado).</h3>
                                <h3 className='text-white md:text-sm text-xs lg:text-lg p-4 bg-[#4A69D9] rounded-lg'>A los Intermediarios Financieros que ya trabajen con cada inmobiliaria.</h3>
                                <h3 className='text-white md:text-sm text-xs lg:text-lg p-4 bg-[#4A69D9] rounded-lg'>
                                    A Inversores Privados que quieran sacar la máxima rentabilidad de sus inversiones inmobiliarias.
                                </h3>
                            </div>
                            <Regalo  className='md:hidden absolute bottom-0 right-0 z-0' width='60%' height='60%' />
                        </div>
                        <div  className={`h-full hidden md:flex p-6 text-gray-900 overflow-hidden `} ><Regalo style={div1R<60?{transform:`translateX(0px)`}:{transform:`translateX(200%)`}} className={' transition duration-750 ease-in-out '} width='100%' height='100%' /> </div>
                    </div>
                </div>
                <div className="snap-center w-full h-full overflow-hidden bg-white grid gap-6 grid-rows-4 relative p-6 md:p-10 justify-items-center">
                        <div className='span-1 w-full md:w-1/2 text-center'>
                            <h3 className=' text-xl md:text-2xl lg:text-4xl font-bold text-regal'> ¿Qué ocurre si un mes tiene menos clientes a los que asesorar?</h3>
                            <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-blu'> Que sus costes bajen considerablemente, Con nosotros paga solo por lo que consume.</h3>
                        </div>
                        <div className="grid span-3 w-full justify-center md:grid-cols-2 grid-cols-1 grid-rows-3 md:grid-rows-1 p-4 md:p-8">
                        <div className="w-full gap-4 h-full flex flex-col row-span-2">
                           <h3 className='text-xl md:text-2xl lg:text-4xl text-regal  md:text-start font-bold'>Podrá descargar 2 PDF’s generados al simular una </h3>
                            <div className='flex flex-row gap-4 items-center'>
                                <h4 className='bg-blu p-1 md:p-2 px-4 md:text-sm text-xs lg:text-lg hover:scale-105 items-center flex text-white rounded-lg h-full '>Hipoteca</h4>
                                 <h4 className='bg-blu p-1 md:p-2 px-4 md:text-sm text-xs lg:text-lg hover:scale-105 items-center flex  text-white rounded-lg  h-full  '>Alquiler</h4>
                                 <h4 className='bg-blu p-1 md:p-2 px-4 md:text-sm text-xs lg:text-lg hover:scale-105 items-center flex text-white rounded-lg text-center h-full  '>Reunificación de deudas</h4>
                            </div>
                            <h3 className='text-veryDarkBlue text-sm md:text-md lg:text-lg font-bold'>Con el logo de su agencia inmobiliaria en los documentos, se generará:</h3>
                            <div className='flex flex-col gap-4'>
                                <h4 className='text-blu text-xs md:text-md lg:text-lg'> <span className='bg-blu p-1 text-xs md:text-md lg:text-lg text-white rounded-md font-bold'>1 PDF</span>&nbsp; con los datos que pueda ver su <span className='text-regal'>cliente.</span> </h4>
                                <h4 className='text-blu text-xs md:text-md lg:text-lg'> <span className='bg-blu p-1 text-xs md:text-md lg:text-lg text-white rounded-md font-bold'>1 PDF</span>&nbsp; con los datos que pueda ver su <span className='text-regal'>inmobiliaria.</span> </h4>
                            </div>
                        </div>
                        <div className=' w-[15rem] h-[20rem] row-span-1 absolute bottom-0 right-0 md:hidden'>
                                <Descarga width='100%' height='100%'/>
                        </div>
                        <div className=' w-full h-[26rem] row-span-1 hidden md:block'>
                                <Descarga width='100%' height='100%'/>
                        </div>

                        
                    </div>
                </div>
                <div ref={div2Ref} className="snap-center w-full overflow-hidden md:block  h-full  bg-slate-50 p-4">
                    <div className="hidden md:grid w-full h-full grid-cols-1 grid-rows-3 gap-6 p-10">
                        <div className="row-span-1 p-4 grid grid-rows-3 transition duration-1000 ease-in-out delay-200" style={div2<70?{transform:`translateX(0px)`}:{transform:`translateX(200%)`}}>
                            <h3 className='md:text-xl lg:text-4xl text-regal font-bold row-span-1'>Misión</h3>
                            <div className='grid grid-cols-3  items-center row-span-2'>
                                
                                <div className='grid grid-cols-3 justify-items-center items-center w-[95%] h-[95%] rounded-lg shadow-lg'>
                                    <div className='col-span-1'><M_glb className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2 '> <h4 className='md:text-sm lg:text-md p-2 '>Le guiamos durante todo el proceso de vida de la hipoteca.</h4></div>
                               </div>
                               <div className='grid grid-cols-3  justify-items-center items-center w-[95%] h-[95%]  rounded-lg shadow-lg'>
                                    <div className='col-span-1'><Homeh className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2 '> <h4 className='md:text-sm lg:text-md p-2 '>Le facilitamos toda la documentación necesaria para operar en su inmobiliaria.</h4></div>
                               </div>
                               <div className='grid grid-cols-3 justify-items-center  items-center w-[95%] h-[95%]  rounded-lg shadow-lg'>
                                    <div className='col-span-1'><M_te className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2'> <h4 className='md:text-sm lg:text-md p-2'>Le aportamos Funcionalidades Extra útiles en su día a día entre propiedades. </h4></div>
                               </div>
                            </div>
                        </div>
                        <div className="row-span-1 p-4 grid grid-rows-3 transition duration-1000 ease-in-out delay-75" style={div2<70?{transform:`translateX(0px)`}:{transform:`translateX(200%)`}}> 
                        <h3 className='md:text-xl lg:text-4xl text-regal font-bold row-span-1'>Visión</h3>
                           <div className='grid grid-cols-3  items-center row-span-2'>
                                
                                <div className='grid grid-cols-3  justify-items-center  items-center w-[95%] h-[95%] rounded-lg shadow-lg'>
                                    <div className='col-span-1'><Dron className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2 p-1'> <h4 className='md:text-sm lg:text-md '>Buscamos que cada inmobiliaria de este país use la tecnología para su operativa diaria.</h4></div>
                               </div>
                               <div className='grid grid-cols-3 justify-items-center  items-center w-[95%] h-[95%]  rounded-lg shadow-lg'>
                                    <div className='col-span-1'><M_cf className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2 p-1'> <h4 className='md:text-sm lg:text-md p-2'>Buscamos inmediatizar y automatizar procesos.</h4></div>
                               </div>
                               <div className='grid grid-cols-3  justify-items-center items-center w-[95%] h-[95%]  rounded-lg shadow-lg'>
                                    <div className='col-span-1'><H_bas className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2'> <h4 className='md:text-xs lg:text-sm p-2'>Buscamos hacer ganar más a cada uno de nuestros clientes. </h4></div>
                               </div>
                            </div>
                            </div>
                        <div className="row-span-1 p-4 grid grid-rows-3 transition duration-1000 ease-in-out" style={div2<70?{transform:`translateX(0px)`}:{transform:`translateX(200%)`}}>
                        <h3 className='md:text-xl lg:text-4xl text-regal font-bold row-span-1'>Valores</h3>
                            <div className='grid grid-cols-3  items-center row-span-2'>
                                
                                <div className='grid grid-cols-3 justify-items-center  items-center w-[95%] h-[95%] rounded-lg shadow-lg'>
                                    <div className='col-span-1'><Homef className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2 '> <h4 className='md:text-sm lg:text-md p-2 '>Nuestra recompensa busca la satisfacción del cliente.</h4></div>
                               </div>
                               <div className='grid grid-cols-3 justify-items-center items-center w-[95%] h-[95%]  rounded-lg shadow-lg'>
                                    <div className='col-span-1'><H_be className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2 '> <h4 className='md:text-sm lg:text-md  p-2'>Pasión por la profesión.</h4></div>
                               </div>
                               <div className='grid grid-cols-3 justify-items-center items-center w-[95%] h-[95%]  rounded-lg shadow-lg'>
                                    <div className='col-span-1'><M_b className='md:w-16 w-12 h-14 md:h-20' /></div>
                                   <div className='col-span-2'> <h4 className='md:text-sm lg:text-md p-2'>Solo contratamos a los mejores. </h4></div>
                               </div>
                            </div>
                        </div>
                        
                    </div>
                    <div  className=' w-full  h-full md:hidden p-10  relative '>
                    <Swiper
                            autoplay={{
                                delay: 7000,
                                disableOnInteraction: false,
                                }}
                            pagination={{
                                clickable: true,
                                }}
                                
                          
                            grabCursor={true}  
                            navigation={{
                                nextEl:'.swiper-button-next',
                                prevEl:'.swiper-button-prev',
                                clickable:true,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className=' w-[80%] h-full md:hidden gap-4  relative '
                            >  <SwiperSlide> 
                                <div className="h-full gap-6 flex-col  p-4 flex">
                                    <h3 className='text-4xl text-regal font-bold text-center h-[5%]'>Misión</h3>
                                    <h4 className=' text-center h-[15%]'>Realizamos asesoramientos financieros inmobiliarios de manera digital e instantánea.</h4>
                                    <div className='grid grid-rows-3  gap-6 items-center h-[80%]'>
                                        
                                        <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><M_glb className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2 '> <h4 className='text-xs  text-center'>Le guiamos durante todo el proceso de vida de la hipoteca.</h4></div>
                                    </div>
                                    <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><Homeh className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2 '> <h4 className='text-xs text-center '>Le facilitamos toda la documentación necesaria para operar en su inmobiliaria.</h4></div>
                                    </div>
                                    <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><M_te className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2'> <h4 className='text-xs text-center'>Le aportamos Funcionalidades Extra útiles en su día a día entre propiedades. </h4></div>
                                    </div>
                                    </div>
                                </div>
                                </SwiperSlide> 
                                <SwiperSlide>
                                <div className="h-full gap-6 p-4 flex-col flex"> 
                                <h3 className='text-4xl text-regal font-bold h-[10%] text-center'>Visión</h3>
                                <div className='grid grid-rows-3 gap-6 items-center h-[75%] sm:h-[90%]'>
                                        
                                        <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><Dron className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2 '> <h4 className='text-xs text-center '>Buscamos que cada inmobiliaria de este país use la tecnología para su operativa diaria.</h4></div>
                                    </div>
                                    <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><M_cf className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2 '> <h4 className='text-xs  text-center'>Buscamos inmediatizar y automatizar procesos.</h4></div>
                                    </div>
                                    <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><H_bas className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2'> <h4 className='text-xs text-center'>Buscamos hacer ganar más a cada uno de nuestros clientes, ya sea una inmobiliaria, intermediarios financieros o inversores privados con propiedades. </h4></div>
                                    </div>
                                    </div>
                            </div> 
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="h-full gap-6 p-4 flex-col flex">
                                <h3 className='text-4xl text-regal font-bold h-[10%] text-center'>Valores</h3>
                                    <div className='grid grid-rows-3 gap-6 items-center h-[75%] sm:h-[90%]'>
                                        
                                        <div className='grid grid-rows-3  justify-items-center items-center p-2 w-[90%] h-[95%] rounded-lg shadow-lg'>
                                            <div className='row-span-1'><Homef className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2 '> <h4 className='text-xs text-center '>Nuestra recompensa busca la satisfacción del cliente.</h4></div>
                                    </div>
                                    <div className='grid grid-rows-3 justify-items-center items-center p-2 w-[90%] h-[95%]  rounded-lg shadow-lg'>
                                            <div className='row-span-1'><H_be className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2 '> <h4 className='text-xs text-center '>Pasión por la profesión.</h4></div>
                                    </div>
                                    <div className='grid grid-rows-3 justify-items-center items-center p-2 w-[90%] h-[95%]  rounded-lg shadow-lg'>
                                            <div className='row-span-1'><M_b className='md:w-16 w-12 h-14 md:h-20' /></div>
                                        <div className='row-span-2'> <h4 className='text-xs text-center'>Solo contratamos a los mejores. </h4></div>
                                    </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                            </Swiper>
                            </div>
                </div>
                
                 <Footer/> 
            </div>

       
           
        </>
    );
}
