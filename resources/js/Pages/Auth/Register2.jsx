import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import RegisterSvg from '@/Components/svg/Register';

export default function Register(prop) {
   console.log('propiedades', prop.msjResult)
    const { data, setData, post, processing, errors, reset } = useForm({
        CifNifNie : '',
        EmpresaInversor : '',
        direccionFacturacion : '',
        telefono :'',
        tipoDeVia : '',
        numeroDeCalle :  '',
        CodigoPostal : '',
        localidad:'',
        Provincia : '',
        pais:'',
        NoFactelefono: '',
        NoFacTipoVia: '',
        NoFacDireccion: '',
        NoFacNumeroDeCalle: '',
        NoFacPostal: '',
        NoFacLocalidad: '',
        NoFacProvincia: '',
        NoFacPais: '',
        token: prop.msjResult
    });
    console.log(data)

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

        post(route('registerStore'));
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
            head:'Regístrate',
            body:'Regístrese para simular una hipoteca.'
        }
        const[checkbox,setcheckbox]=useState(false);
        
    const check =(e)=>{
        checkbox?setcheckbox(false):setcheckbox(true);
        !checkbox?e.target.checked=false : e.target.checked=true;
        console.log(e.target.value)
        

    }


    return (
        <GuestLayout carousel={text} text={true} pag='register2' tittle={tittle}>
            <Head title="Register" />
            <RegisterSvg height="55vh" width="25vw"/>

            {<></>}
        


            <form onSubmit={submit} className='flex flex-col overflow-y-auto gap-2  p-4 h-[90vh]'>
            
            <div className='grid grid-cols-2 gap-2 '>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="CifNifNie" value="CIF/NIF/NIE" />

                    <TextInput
                        id="CifNifNie"
                        name="CifNifNie"
                        value={data.CifNifNie}
                        className="mt-1 block w-full"
                        autoComplete="CifNifNie"
                        isFocused={true}
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.CifNifNie} className="mt-2" />
                </div>

                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="EmpresaInversor" value="Nombre de Empresa/Nombre de inversor privado" />

                    <TextInput
                        id="EmpresaInversor"
                        type="text"
                        name="EmpresaInversor"
                        value={data.EmpresaInversor}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.EmpresaInversor} className="mt-2" />
                </div>
                
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFactelefono':"telefono" } value="Teléfono" />

                    <TextInput
                        id={checkbox?'NoFactelefono':"telefono" }
                        type="text"
                        name={checkbox?'NoFactelefono':"telefono" }
                        value={checkbox?data.NoFactelefono:data.telefono }
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.telefono} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacTipoVia':"tipoDeVia"} value="Tipo de vía" />

                    <TextInput
                        id={checkbox?'NoFacTipoVia':"tipoDeVia"}
                        type="text"
                        name={checkbox?'NoFacTipoVia':"tipoDeVia"}
                        value={checkbox?data.NoFacTipoVia:data.tipoDeVia}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.tipoDeVia} className="mt-2" />
                </div>

               
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacDireccion':"direccionFacturacion"} value="Dirección adicional (opcional)" />

                    <TextInput
                        id={checkbox?'NoFacDireccion':"direccionFacturacion"}
                        type="text"
                        name={checkbox?'NoFacDireccion':"direccionFacturacion"}
                        value={checkbox?data.NoFacDireccion:data.direccionFacturacion}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.direccionFacturacion} className="mt-2" />
                </div>

               
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacNumeroDeCalle':"numeroDeCalle"} value="Número de calle" />

                    <TextInput
                        id={checkbox?'NoFacNumeroDeCalle':"numeroDeCalle"}
                        type="text"
                        name={checkbox?'NoFacNumeroDeCalle':"numeroDeCalle"}
                        value={checkbox?data.NoFacNumeroDeCalle:data.numeroDeCalle }
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.numeroDeCalle} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacPostal':"CodigoPostal"} value="Código Postal" />

                    <TextInput
                        id={checkbox?'NoFacPostal':"CodigoPostal"}
                        type="text"
                        name={checkbox?'NoFacPostal':"CodigoPostal"}
                        value={checkbox?data.NoFacPostal:data.CodigoPostal}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.CodigoPostal} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacLocalidad':"localidad"} value="Localidad" />

                    <TextInput
                        id={checkbox?'NoFacLocalidad':"localidad"}
                        type="text"
                        name={checkbox?'NoFacLocalidad':"localidad"}
                        value={checkbox?data.NoFacLocalidad:data.localidad}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.localidad} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacProvincia':"Provincia"} value="Provincia" />

                    <TextInput
                        id={checkbox?'NoFacProvincia':"Provincia"}
                        type="text"
                        name={checkbox?'NoFacProvincia':"Provincia"}
                        value={checkbox?data.NoFacProvincia:data.Provincia}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.Provincia} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput={checkbox?'NoFacPais':"pais"} value="País" />

                    <TextInput
                        id={checkbox?'NoFacPais':"pais"}
                        type="text"
                        name={checkbox?'NoFacPais':"pais"}
                        value={checkbox?data.NoFacPais:data.pais}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.pais} className="mt-2" />
                </div> </div>
                {checkbox?
                <div className='flex flex-col gap-2 '>
                    <h3>Dirección de Facturación:</h3>
                    <div className='grid grid-cols-2 gap-2 '>
                    <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="telefono" value="Teléfono" />

                    <TextInput
                        id="telefono"
                        type="text"
                        name="telefono"
                        value={data.telefono}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.direccionFacturacion} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="tipoDeVia" value="Tipo de vía" />

                    <TextInput
                        id="tipoDeVia"
                        type="text"
                        name="tipoDeVia"
                        value={data.tipoDeVia}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.tipoDeVia} className="mt-2" />
                </div>

               
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="direccionFacturacion" value="Dirección adicional (opcional)" />

                    <TextInput
                        id="direccionFacturacion"
                        type="text"
                        name="direccionFacturacion"
                        value={data.direccionFacturacion}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.direccionFacturacion} className="mt-2" />
                </div>

               
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="numeroDeCalle" value="Número de calle" />

                    <TextInput
                        id="numeroDeCalle"
                        type="text"
                        name="numeroDeCalle"
                        value={data.numeroDeCalle}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.numeroDeCalle} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="CodigoPostal" value="Código Postal" />

                    <TextInput
                        id="CodigoPostal"
                        type="text"
                        name="CodigoPostal"
                        value={data.CodigoPostal}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.CodigoPostal} className="mt-2" />
                </div>
                    <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="localidad" value="Localidad" />

                    <TextInput
                        id="localidad"
                        type="text"
                        name="localidad"
                        value={data.localidad}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.localidad} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="Provincia" value="Provincia" />

                    <TextInput
                        id="Provincia"
                        type="text"
                        name="Provincia"
                        value={data.Provincia}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.Provincia} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="pais" value="País" />

                    <TextInput
                        id="pais"
                        type="text"
                        name="pais"
                        value={data.pais}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                       
                    />

                    <InputError message={errors.pais} className="mt-2" />
                </div>
                            <TextInput
                            name='token'
                            type='hidden'
                            value={data.token}

                            />
                    </div>
                </div>
                :
                <div className='flex flex-col gap-2 opacity-0 absolute right-full'>
                    <h3>Dirección de Facturación:</h3>
                    <div className='grid grid-cols-2 gap-2 '>
                    <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="telefono" value="Teléfono" />

                    <TextInput
                        id={'NoFactelefono' }
                        type="text"
                        name={'NoFactelefono' }
                        value={data.NoFactelefono}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.direccionFacturacion} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="tipoDeVia" value="Tipo de vía" />

                    <TextInput
                        id={'NoFacTipoVia'}
                        type="text"
                        name={'NoFacTipoVia'}
                        value={data.NoFacTipoVia}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.tipoDeVia} className="mt-2" />
                </div>

               
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="direccionFacturacion" value="Dirección adicional (opcional)" />

                    <TextInput
                        id={'NoFacDireccion'}
                        type="text"
                        name={'NoFacDireccion'}
                        value={data.NoFacDireccion}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.direccionFacturacion} className="mt-2" />
                </div>

               
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="numeroDeCalle" value="Número de calle" />

                    <TextInput
                        id={'NoFacNumeroDeCalle'}
                        type="text"
                        name={'NoFacNumeroDeCalle'}
                        value={data.NoFacNumeroDeCalle}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.numeroDeCalle} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="CodigoPostal" value="Código Postal" />

                    <TextInput
                        id={'NoFacPostal'}
                        type="text"
                        name={'NoFacPostal'}
                        value={data.NoFacPostal}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.CodigoPostal} className="mt-2" />
                </div>
                    <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="localidad" value="Localidad" />

                    <TextInput
                        id={'NoFacLocalidad'}
                        type="text"
                        name={'NoFacLocalidad'}
                        value={data.NoFacLocalidad}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.localidad} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="Provincia" value="Provincia" />

                    <TextInput
                        id={'NoFacProvincia'}
                        type="text"
                        name={'NoFacProvincia'}
                        value={data.NoFacProvincia}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.Provincia} className="mt-2" />
                </div>
                <div className="mt-4 flex flex-col justify-between">
                    <InputLabel forInput="pais" value="País" />

                    <TextInput
                        id={'NoFacPais'}
                        type="text"
                        name={'NoFacPais'}
                        value={data.NoFacPais}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        
                    />

                    <InputError message={errors.pais} className="mt-2" />
                </div>

                    </div>
                </div>}
                

                <div className="flex  items-center md:items-start flex-col gap-4 mt-4">
                    <div className='flex flex-row items-center gap-2'>
                        <input type="checkbox" id="check" name="check" onClick={check}  ></input>
                        <label>Dirección de Facturación coincide con la ya aportada</label>
                        
                    </div>

                    
                    

                    <PrimaryButton className="" processing={processing}>
                        Finalizar
                    </PrimaryButton>
                    <div className='flex text-sm text-regal md:text-base'>
                    <h6>¿Ya tienes una cuenta?</h6>
                    <Link
                        href={route('login')}
                        className="underline text-sm md:text-base text-blu hover:text-gray-900 rounded-md focus:outline-none "
                    >
                        Inicia sesión
                    </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
