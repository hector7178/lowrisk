import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 py-2 border-white text-sm font-bold leading-5 text-white transition duration-150 ease-in-out w-1/2'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-bold leading-5 text-white hover:scale-110 hover:translate-x-[2rem] w-1/2 transition duration-150 ease-in-out'
            }
        >
            {children}
        </Link>
    );
}
