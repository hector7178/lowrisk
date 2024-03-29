import { Link } from "@inertiajs/inertia-react"


export default function SideBar(){
    const Menus = [
        { title: 'Dashboard', path: '/dashboard', src: null },
        { title: 'Hipotecas', path: '/Hipotecas', src: null },
        { title: 'Profile', path: '/profile', src: null },
        { title: 'Signin', path: '/login', src: null, gap: 'true' },
    ]
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className={`${
                    open ? 'w-60' : 'w-fit'
                } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <div
                    className={`${
                        !open && 'rotate-180'
                    } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                ></div>
                <Link to='/'>
                    <div className={`flex ${open && 'gap-x-4'} items-center`}>
                        <img src={Logo} alt='' className='pl-2' />
                        {open && (
                            <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                                Goal Quest
                            </span>
                        )}
                    </div>
                </Link>

                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                                    location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${
                                        !open && 'hidden'
                                    } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
        )
}