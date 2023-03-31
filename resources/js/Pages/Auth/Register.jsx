import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import RegisterSvg from '@/Components/svg/Register';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };
    const text=[
        {
            head:'¿Regalamos asesoramientos?.',
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
            head:'Registrarse',
            body:'Registrate para simular una hipoteca.'
        }
    

    return (
        <GuestLayout carousel={text} text={true} pag='register' tittle={tittle}>
            <Head title="Register" />
            <RegisterSvg height="55vh" width="25vw"/>

            {<></>}


            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
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
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center flex-col gap-4 mt-4">
                    

                    <PrimaryButton className="" processing={processing}>
                        Registrarse
                    </PrimaryButton>
                    <div className='flex text-sm text-regal md:text-base'>
                    <h6>Ya tienes cuenta?</h6>
                    <Link
                        href={route('login')}
                        className="underline text-sm md:text-base text-blu hover:text-gray-900 rounded-md focus:outline-none "
                    >
                        Inicia sesion
                    </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
