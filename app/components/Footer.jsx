import Logo from '../../public/images/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer flex justify-center items-center border z-10 border-t-[#33353F] border-b-[#000000] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-center items-center">
                <span>
                    <Image src={Logo} alt="Logo" className="md:w-60 w-40" />
                </span>
            </div>
        </footer>
    )
}

export default Footer