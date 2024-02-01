import { Link } from 'react-router-dom'; 
import ConnectWalletButton from './ConnectWalletButton';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
    return (
        <header className=' h-[80px] shadow-sm px-20'>
            <nav className='flex justify-between text-center flex-end p-2 items-cente'>
                <div className="logo pt-2">
                    <Link to="/"><img src={logo2} alt="logo" /></Link>
                </div>
                <div className="nav-links-btn flex text-center align-middle pt-2 ">
                    <ul className='flex justify-between  items-center'  >
                        <li className='px-6'><Link className='active:font-bold' to="/">Home</Link></li>
                        <li className='px-6  '><Link to="/events" className='hover:text-[#194486] '>Events</Link></li>
                        <li className='px-6'><Link className='hover:text-[#194486] ' to="/Creators">Creators</Link></li>
                        <li className='px-6'><Link className='hover:text-blue-800 ' to="/Buyers">Buyers</Link></li>
                        <li className='px-6'><Link className='hover:text-[#194486] ' to="/">About</Link></li>
                    </ul>
                    <ConnectWalletButton className='border-solid border-2 border-[#194486] px-[17px] py-2 rounded-lg' />
                </div>
            </nav>
        </header>

    );
};

export default Navbar;
