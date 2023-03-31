export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-regal border border-transparent rounded-3xl justify-center w-full lg:w-1/2 font-semibold text-xs md:text-base text-white uppercase tracking-widest hover:bg-[#041e3e] focus:bg-[#041e3e] active:bg-[#041e3e] focus:outline-none transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
