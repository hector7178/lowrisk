import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import LoginSvg from '@/Components/svg/login';
import Carousel from '@/Components/carrusel';


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    const text=[
    {
        head:'Regalamos asesoramientos.',
        body:'si, podra asesorarse de manera gratuita 10 veces.'
    },
    {
        head:'¿Tiene permanecia?',
        body:'No, nuestros servicion no tienen ningun tipo de permanecia.'
    },
    {
        head:' ¿Su analista financiero está haciendo esperar al cliente?.',
        body:' nosotros le ayudamos ha simular una hipoteca en menos de 3 minutos. '
    },
    {
        head:'Estamos certificados por el Banco de España como intermediarios de crédito inmobiliarios.',
        body:'Cumpliendo todos los requisitos de la normativa LCCI.'
    }
    ]
    const tittle={
        head:'Iniciar Sesión',
        body:'Inicie sesión para simular una hipoteca.'
    }

    return (
        
        
        <GuestLayout  carousel={text} text={true} pag='ISesion' tittle={tittle} >
            <Head title="Log in" />
            <LoginSvg height="55vh" width="25vw"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-between w-full mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#041e3e]"
                        >
                            Olvidó su contraseña?
                        </Link>
                    )}
                </div>

                <div className="flex items-center justify-center mt-4 flex-col gap-4 ">
                   

                    <PrimaryButton className="" processing={processing}>
                        Iniciar Sesión
                    </PrimaryButton>
                    <div className=" items-center flex ">
                        <h4 className=' text-sm sm:text-base text-regal'>No tienes cuenta?</h4>
                        <Link
                            href={route('register')}
                            className="underline text-sm sm:text-base text-blu hover:text-[#041e3e] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#041e3e]"
                        >
                           Registrate
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
       
    );
}
