
import { Head } from '@inertiajs/inertia-react';
import NavBar from '@/Components/NavBar';
import Search from '@/Components/Search';
import {  useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon, CheckCircleIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';


export default function Faq(props) {

    const search=[
    {
        tittle:'Qué día se les pasará al cobro los asesoramientos realizados?',
        body:'El día 28 de cada mes, o en caso contrario, a finales de cada mes.'
    },
    {    
        tittle:'Puede seguir usando el servicio si ha incurrido en impagos del mes anterior?',
        
        body:'No, el servicio prestado por LOWRISK MANAGEMENT S.L. dejará de funcionar en cuanto reciba un impago del mes anterior.'
    },
    { 
        tittle:'Hay asesores especializados detrás de este servicio?',
        body:'Si, personal con dilatada experiencia y formación revisan las solicitudes para su correcto funcionamiento.'
    },
    { 
        tittle:'Puede contratarnos como Intermediarios Financieros si ya tiene una financiera de confianza?',
       body:'Si, actuamos tanto como Intermediarios Financieros principales como de apoyo.'
    },
    {
        tittle:'Estamos registrados en el Banco de España?',
        body:'Si, estamos registrados en el Banco de España como Intermediarios de Crédito Inmobiliario.'
    },  
    {
        tittle:'Cómo podemos ayudarle ante cualquier duda adicional?',
        
       body:' Podrá contactarnos en lowrisk@lowrisk.es, para que un asesor especializado le aclare todo aquello que estime conveniente.' 
    },    
    {    
        tittle:'Qué ámbito de actuación tenemos?',
        body:'Actuamos en cada rincón de España.'
    },
    {
        tittle:'Se automatiza también la documentación a pedir?',
        
       body:'Exacto, nuestro sistema, acorde a lo reflejado por su cliente en la solicitud, le pedirá la documentación necesaria para continuar con el proceso.'
    },  
    { 
        tittle:'Desde qué email mandamos la petición de documentación?',
        
       body:'lowrisk@lowrisk.es'
    },
    {    
        tittle:'¿Puede elegir mandar usted la petición de documentación al cliente previo filtro por su parte?',
        
       body:'Si, tendrá la citada opción en nuestro sistema.'
    }, 
    {   
        tittle:'¿Los precios de esta web son por usuario registrado?',
        
       body:'Si, no pudiendo varias empresas tener el mismo usuario.'
    },
    {    
        tittle:'¿Qué debe hacer ante una reclamación?',
        
       body:'Si existiera cualquier tipo de reclamación ejercida contra nosotros como entidad, se emplaza a comunicar la misma en el email lowrisk@lowrisk.es, haciendo figurar en el Asunto del email la palabra “Reclamación”.'
    },
    {    
        tittle:'¿En cuánto tiempo resolveremos su incidencia?',
        
       body:'LOWRISK MANAGEMENT S.L. comunica y acepta su obligación de resolución de incidencias en un plazo no superior a un mes, así como el carácter vinculante de las mismas. Todo ello acorde a las directrices establecidas desde el Banco de España.'
    },
    {  
        tittle:'¿Qué plazo máximo tiene para comunicar la incidencia al Banco de España?',
        
       body:'Le recordamos que, como Intermediarios de Crédito Inmobiliario registrados en el Banco de España, si existiera por su parte cualquier reclamación ejercida contra LOWRISK MANAGEMENT S.L., dispone del plazo de un año para poder hacer llegar la misma a los órganos pertinentes del Banco de España.'
    }
        

    ]
    const [select,setSelect]=useState('')


    const [query, setQuery] = useState('')

    const [page, setPage] = useState(1)

    const page_size= 5;
    const totalPages=Math.ceil(search.length/page_size)
    const handlePageChange=(PropPage)=>{
        setPage(PropPage)
    }

    const startIndex=(page-1)*page_size;
    const endIndex=startIndex+page_size;
    const currentPage=search.slice(startIndex,endIndex);

    const filteredPeople =
    query === ''
      ? []
      :  search.filter((sea) => {
        const T=sea.tittle
          return T.toLowerCase().includes(query.toLowerCase())
        })
   console.log(filteredPeople)

    return (
        <>
            <Head title="FAQ" />
            <NavBar props={props.auth.user}/>

        
                    <div className='flex flex-col h-[120vh] p-10 md:p-20 gap-4'>
                        <div className='flex flex-col md:grid md:grid-cols-2 md:p-6 gap-4 h-[45%]'>
                            <div className='flex flex-col md:p-4 gap-6 '>
                                <h1 className=' text-2xl sm:text-tittle text-regal font-bold'>¿Tienes alguna pregunta?</h1>
                                <div className='flex flex-col'  >
                                    <div className='flex text-center lg:text-start'>
                                        <h2 className=' text-lg text-regal'>Aqui tenemos algunas   &nbsp;<span className=' text-lg text-blu'>preguntas frecuentes</span></h2>
                                    </div>
                                    
                                
                                </div>
                            
                            </div>
                        <div className='w-full md:w-[85%] items-center border-gray-200 shadow-md border-2 rounded-lg flex flex-row md:justify-between md:self-center p-2 '>
                             <MagnifyingGlassIcon className='basis-[15%] text-gray-400 h-[2rem]'/>
                            <div className='basis-[85%] flex flex-col'>
                            <label className='text-gray-400 text-xs'>Preguntas&nbsp; frecuentes</label>
                            <input type='text' onChange={(event) => setQuery(event.target.value)} id='Search' placeholder='Buscar' className='border-none'></input>
                            </div>
                           

                        </div>
                          
                        </div>
                        {query===''?
                                    <div className=' flex flex-col gap-6 md:p-4'>
                                            
                                       {  currentPage.map((s, index)=>{
                                           return( <Disclosure>
                                            {({ open }) => (
                                                <div className={select===index ?'w-full md:w-[70%] border-t-blu border-2 shadow-xl rounded-md ':'w-full md:w-[70%] rounded-md  border-t-blu border-2 '} >
                                                <Disclosure.Button onClick={()=>{select===index ?setSelect(''):setSelect(index)}} className='grid grid-cols-6  w-full p-4 text-lg justify-items-center items-center'>
                                                <div className='grid text-sm sm:text-lg col-span-5 w-full items-center grid-cols-3  gap-x-4'> 
                                                    <h5 className='col-span-2 text-start'>{ s.tittle}</h5>
                                                    <h5 className='col-span-1 bg-blu rounded-md h-fit text-white text-xs p-1 w-fit'> pregunta frecuente</h5>
                                                </div>
                                                <CheckCircleIcon className={select===index ? ' col-span-1 transform text-blu w-[2rem]' : 'col-span-1 animate-bounce  w-[2rem]'} />
                                                </Disclosure.Button>
                                                <Transition
                                                    show={select===index ?true:false}
                                                    enter="transition duration-200 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-125 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    
                                                    <Disclosure.Panel  className='ease-in duration-200 p-6' static>
                                                   {s.body}
                                                   </Disclosure.Panel>
                                                </Transition>
                                                </div>
                                            )}
                                            </Disclosure>)})}
                                            <div className='flex flex-row gap-2'>
                                                {Array.from({length:totalPages}).map((_, index)=>{
                                                return(
                                            <button className={`w-fit h-fit p-1 text-white   ${index + 1===currentPage?' bg-regal font-bold':''}`} key={index} onClick={()=>handlePageChange()} disable={index + 1 ===currentPage}>{index+1}</button>)})}


                                            </div>
                                            
                                    </div>
                                    : <div className=' flex flex-col gap-6'>
                                       { filteredPeople.map((s, index)=>{
                                        
                                        return(
                                        

                                            
                                                <Disclosure>
                                            {({ open }) => (
                                                <div className={select===index ?'w-[100%] md:w-[70%]  border-t-blu border-2 shadow-xl rounded-md ease-in duration-300':'w-[70%] rounded-md  border-t-blu border-2 ease-in duration-300'} >
                                                <Disclosure.Button onClick={()=>{select===index ?setSelect(''):setSelect(index)}} className='flex justify-between  w-full p-4 text-lg items-center'>
                                                <div className='flex text-sm sm:text-lg items-center gap-x-4'> 
                                                     {s.tittle}
                                                </div>
                                                <CheckCircleIcon className={select===index ? ' transform text-blu w-[2rem]' : ' animate-bounce  w-[2rem]'} />
                                                </Disclosure.Button>
                                                <Transition
                                                    show={select===index ?true:false}
                                                    enter="transition duration-200 ease-out"
                                                    enterFrom="transform scale-95 opacity-0"
                                                    enterTo="transform scale-100 opacity-100"
                                                    leave="transition duration-125 ease-out"
                                                    leaveFrom="transform scale-100 opacity-100"
                                                    leaveTo="transform scale-95 opacity-0"
                                                >
                                                    
                                                    <Disclosure.Panel  className='ease-in duration-300 p-6' static>
                                                   {s.body}
                                                    </Disclosure.Panel>
                                                </Transition>
                                                </div>
                                            )}
                                            </Disclosure>

                                           
                                        )}) }
                                    </div>
                                    }
                         </div>
                          

                        
        </>
       
    );
}
