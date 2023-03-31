import { useState } from 'react';
import ApplicationLogo from '@/Components/svg/Logo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Logo from '@/Components/svg/Logo';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showNav, setShowNav] = useState(true);
     console.log(route().current())
    return (
        <div className="min-h-screen  grid  bg-gray-100 md:grid-cols-4 ">
            <nav className={"bg-white md:col-span-1 border-b border-gray-100 h-full hidden md:block md:w-full relative overflow-hidden shadow-lg"}>
                <div className="max-w-7xl mx-auto px-4 ">
                    <div className="flex flex-col h-screen  justify-between p-2 md:p-10">
                        <div className="flex flex-col  gap-6 ">
                            <div className="shrink-0 flex flex-row gap-2 md:gap-6 items-center">
                                <div className='bg-gray-400 rounded-full w-[3rem] h-[3rem]'></div>
                                <div className="font-medium text-base text-gray-800">
                                    {auth.user.name}
                                </div>
                            </div>

                            <div className="hidden flex-col bg-blu gap-4 p-4 md:gap-8 sm:flex absolute bottom-0 right-0 left-0 h-[90vh] w-[40vw] justify-end"
                             style={{clipPath:' polygon(100% 100%, 0% 100% , 0.00% 10.00%, 1.67% 10.05%, 3.33% 10.21%, 5.00% 10.47%, 6.67% 10.82%, 8.33% 11.26%, 10.00% 11.77%, 11.67% 12.34%, 13.33% 12.96%, 15.00% 13.62%, 16.67% 14.29%, 18.33% 14.96%, 20.00% 15.61%, 21.67% 16.23%, 23.33% 16.80%, 25.00% 17.32%, 26.67% 17.75%, 28.33% 18.10%, 30.00% 18.36%, 31.67% 18.52%, 33.33% 18.57%, 35.00% 18.52%, 36.67% 18.36%, 38.33% 18.10%, 40.00% 17.75%, 41.67% 17.32%, 43.33% 16.80%, 45.00% 16.23%, 46.67% 15.61%, 48.33% 14.96%, 50.00% 14.29%, 51.67% 13.62%, 53.33% 12.96%, 55.00% 12.34%, 56.67% 11.77%, 58.33% 11.26%, 60.00% 10.82%, 61.67% 10.47%, 63.33% 10.21%, 65.00% 10.05%, 66.67% 10.00%, 68.33% 10.05%, 70.00% 10.21%, 71.67% 10.47%, 73.33% 10.82%, 75.00% 11.26%, 76.67% 11.77%, 78.33% 12.34%, 80.00% 12.96%, 81.67% 13.62%, 83.33% 14.29%, 85.00% 14.96%, 86.67% 15.61%, 88.33% 16.23%, 90.00% 16.80%, 91.67% 17.32%, 93.33% 17.75%, 95.00% 18.10%, 96.67% 18.36%, 98.33% 18.52%, 100.00% 18.57%)'}}>
                                <NavLink  href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>
                                <NavLink  href="/">
                                    Inicio
                                </NavLink>
                                <NavLink  href={route('users.index')} active={route().current('users.index')}>
                                    Usuarios
                                </NavLink>
                                <NavLink  href={route('rols.index')} active={route().current('rols.index')}>
                                    Roles
                                </NavLink>
                                <NavLink  href={route('firstplugins.index')} active={route().current('firstplugins.index')}>
                                    Hipotecas
                                </NavLink>
                                <NavLink  href={route('profile.edit')} active={route().current('profile.edit')}>
                                    Perfil
                                </NavLink>
                                <ResponsiveNavLink  href={route('logout')} method="post" as="button">
                                    Cerrar sesión
                                </ResponsiveNavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                          
                        </div>

                       
                    </div>
                </div>

                
            </nav>
            <div className='md:col-span-3 w-full relative '>
            {header && (
                <header className="bg-white shadow flex justify-between flex-row-reverse  w-full">
                    <div className="w-1/4  py-6 px-4 sm:px-6 lg:px-8 self-end">{header}</div>
                    <div className=" w-full md:w-1/4 p-4 ">
                            <Logo className='hidden md:block p-4' width='100%' height='100%'/> 
                            {showingNavigationDropdown? 
                            <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                </button>
                            </div>
                            :
                            <div className={'block flex flex-col sm:hidden absolute left-0 top-0 bg-blu w-3/4 h-screen'}>
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                </button>
                                
                                <div className="pt-2 pb-3 flex flex-col space-y-1">
                                    <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                                        Dashboard
                                    </ResponsiveNavLink>
                                    <NavLink href={route('users.index')} active={route().current('usersusers.index')}>
                                        Usuarios
                                    </NavLink>
                                    <NavLink href={route('rols.index')} active={route().current('rols.index')}>
                                        Roles
                                    </NavLink>
                                    <NavLink href={route('firstplugins.index')} active={route().current('firstplugins.index')}>
                                        FirstPlugin
                                    </NavLink>
                                </div>

                                <div className="pt-4 pb-1 border-t border-gray-200">
                                    <div className="px-4">
                                        <div className="font-medium text-base text-gray-800">
                                            {auth.user.name}
                                        </div>
                                       </div>

                                    <div className="mt-3 space-y-1">
                                        <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                                        <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                            Log Out
                                        </ResponsiveNavLink>
                                    </div>
                                </div>
                            </div>  }    
                    </div>
                
                </header>
            )}

            <main className='overflow-y-auto h-[90vh] p-6'>{children}</main>
            </div>
        </div>
    );
}
