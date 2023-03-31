import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Usuarios(props) {
    console.log(props)
   const user= props.users
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">usuarios</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900"> Usuarios</div>
                        <Link href={route('users.create')}>Crear</Link>
                        <Link href={route('users.edit',{ user})}>Editar</Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
