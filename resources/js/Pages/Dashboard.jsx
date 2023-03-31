import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import {  useDispatch,useSelector } from 'react-redux';
import {  incremented, decremented  } from '../storefeacture/hipotecas'

export default function Dashboard(props) {
    const value= useSelector(state=> state.hipo)
   
    const dispatch= useDispatch()
    console.log(props)
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 p-6 grid grid-cols-6 grid-row-2 justify-center justify-items-center">
                <div className='bg-white rounded-lg w-[80%] h-[90%] col-span-2' >



                </div>
                <div className='bg-white rounded-lg w-[80%] h-[90%] col-span-2' >



                </div>
                <div className='bg-white rounded-lg w-[80%] h-[90%]  col-span-2' >



                </div>
                <div className='bg-white rounded-lg w-[90%] h-[90%]  col-span-4' >



                </div>
                <div className='bg-white rounded-lg w-[80%] h-[90%]  col-span-2' >



                </div>
            </div>
        </AuthenticatedLayout>
    );
}
