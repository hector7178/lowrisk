import NavBar from '@/Components/NavBar';
import M_check from '@/Components/svg/M_check';
import { Head } from '@inertiajs/inertia-react';
import {  useDispatch,useSelector } from 'react-redux';
import {  incremented, decremented  } from '../storefeacture/hipotecas';
import { useEffect, useState, useRef } from 'react';

export default function CalcularHip(props){
    const [page, setPage]=useState('1')
    const handleChange= ()=>{
        page==='1'?setPage('2'):setPage('1')
    }
    return(
        <>
            <Head title="Calcular hipotecas" />
            <NavBar props={props.auth.user}/>

            
                {page==='1'?<div className="p-8 grid grid-cols-2 justify-items-center ">
                <div className='w-full h-full flex flex-col'>
                    <div className='flex flex-col'>
                        <h3 className='text-regal text-xl'>Calcular Hipotecas</h3>
                        <h3 className='text-regal text-sm'>calcula tu hipoteca en menos de 3 minutos</h3>
                        
                    </div>
                    <div className=''>
                        <label htmlFor="selectTipo"></label>
                        <select name="selectTipo" id="selectTipo">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className=''>
                        <input type="checkbox" name="" id="" />
                    </div>
                    
                    <div className=''>
                    <label htmlFor="selectRegion"></label>
                        <select name="selectRegion" id="selectRegion">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        
                    </div>
                    <button onClick={handleChange}
                        className='rounded-lg shadow-md bg-blu text-white font-bold w-1/2 md:w-1/4'>
                            Siguiente
                    </button>
                </div>
                <div className='w-full h-full relative'>
                    <M_check className='' width='100%' height='100%' />
                    <div className='rounded-lg shadow-lg absolute w-3/4 h-1/4 bg-gray-200 grid grid-rows-3' >
                        <div className='flex-col flex row-span-2'>
                            <h4 className='text-regal text-md'></h4>
                            <h4 className='text-regal text-md'></h4>
                            <h4 className='text-regal text-md'></h4>
                        </div>
                        <div className='flex-col flex row-span-2'>

                        </div>
                    </div>
                </div>
                </div>
                :
                <div></div>
                }
            
        </>
    )
}