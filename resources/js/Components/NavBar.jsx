import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link} from '@inertiajs/inertia-react';
import Logo from './svg/Logo'
import {
 
  XMarkIcon,
  ChevronDownIcon,
  LinkIcon,
  Bars3Icon
} from '@heroicons/react/24/outline'


const Plugins = [
{
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
   
},

{
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    
},

{ 
    name: 'Security', 
    description: "Your customers' data will be safe and secure.",
    href: '#',
},
 
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props) {
  
  return (
    <Popover className="relative bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center flex-row border-b-2 border-gray-100 py-2 md:py-4 " >
          <div className="flex basis-1/4 ">
            <a className='w-full h-full p-2' href="/">
              
            <Logo width='100%' height='100%' />
             
                
                
            </a>
          </div>
          <div  className="flex basis-3/4 justify-end items-center ">
          <div className=" md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-regal">
              <span className="sr-only">Open menu</span>
                  <Bars3Icon height='1.5rem' width='1.5rem' />

              
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex justify-end gap-6 items-center">
          <Link href="/" className="text-sm hover:scale-110 text-center  font-medium text-gray-500 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="/calculatemortgage" className="text-sm font-medium text-center text-gray-500 hover:scale-110  hover:text-gray-900">
              Calculadora de hipotecas
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-center text-sm font-medium hover:scale-110 hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span>Funcionalidades extra </span><ChevronDownIcon height='1.2rem' width='1.2rem'/>
                    
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {Plugins.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                               <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                       
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            
            <Link href="/contact" className="text-sm text-center font-medium text-gray-500 hover:scale-110  hover:text-gray-900">
              contacto
            </Link>
            <Link href="/workwithus" className="text-sm text-center font-medium text-gray-500 hover:scale-110  hover:text-gray-900">
              trabaja con nosotros
            </Link>
            <Link href="/faq" className="text-sm text-center font-medium text-gray-500 hover:scale-110  hover:text-gray-900">
              FAQ
            </Link>

            
            {props.props ?
            (
            <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
            Dashboard
            </Link>
            ) : (
            <div className="hidden items-center justify-end md:flex md:flex-1 ">
           { props.pag==='other'||props.pag===false?
          <Link href={route('register')} className=" inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-regal px-4 py-2 text-base font-medium text-white hover:shadow-lg hover:bg-[#041e3e]">
          Registrate
          </Link> 
            :
            <Link href={route('login')} className=" inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-transparent bg-regal px-4 py-2 text-base font-medium text-white hover:shadow-lg hover:bg-[#041e3e]">
           Iniciar sesión
         </Link>
          
            }
           
          </div>)}
          </Popover.Group>
          
        </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-[11] absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                <Logo width='70%' height='100%'/>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md md:hidden bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon height='1.5rem' width='1.5rem'/>
                    
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-600">
                 inicio
                </Link>
                  
              <Link href="/calculatemortgage" className="text-base font-medium text-gray-900  hover:text-gray-600">
                Calculadora de hipotecas
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-900',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-600 focus:outline-none'
                      )}
                    >
                     <span>Funcionalidades extra </span><ChevronDownIcon className={ open ?"rotate-180":""} height='1.2rem' width='1.2rem'/> 
                      
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {Plugins.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              
              <Link href="/contact" className="text-base font-medium text-gray-900   hover:text-gray-600">
                contacto
              </Link>
              <Link href="/workwithus" className="text-base font-medium text-gray-900   hover:text-gray-600">
                trabaja con nosotros
              </Link>
              <Link href="/faq" className="text-base font-medium text-gray-900   hover:text-gray-600">
                FAQ
              </Link>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              
              <div>
                <Link
                  href={route('login')}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-regal px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#041e3e]"
                >
                  Inicia sesion
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                 No tienes cuenta?{' '}
                  <Link href={route('register')} className="text-regal hover:text-[#041e3e]">
                  Registrate
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
