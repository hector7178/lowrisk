import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-1/2 flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700'
                    : 'border-transparent text-white hover:text-regal hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 rounded-sm '
            } text-base font-bold focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
