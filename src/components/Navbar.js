import { Link } from 'react-router-dom'; 
import ConnectWalletButton from './ConnectWalletButton';

const Navbar = () => {
    return (
        <header className=' h-[80px] shadow-sm px-20'>
            <nav className='flex justify-between text-center flex-end p-2 items-cente'>
                <div className="logo pt-5">
                    <svg width="116" height="24" viewBox="0 0 116 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6094 5.15625H13.6562V23.5H9.59375V5.15625H0.625V1.09375H22.6094V5.15625ZM29.7031 23.5H25.6406V1.09375H29.7031V23.5ZM54.5156 23.5H39.8594C39.4844 23.5 39.0781 23.4583 38.6406 23.375C38.2135 23.2812 37.7865 23.1406 37.3594 22.9531C36.9427 22.7656 36.5417 22.526 36.1562 22.2344C35.7708 21.9323 35.4271 21.5729 35.125 21.1562C34.8333 20.7292 34.599 20.2396 34.4219 19.6875C34.2448 19.125 34.1562 18.4948 34.1562 17.7969V6.79688C34.1562 6.42188 34.1979 6.02083 34.2812 5.59375C34.375 5.15625 34.5156 4.72917 34.7031 4.3125C34.8906 3.88542 35.1354 3.47917 35.4375 3.09375C35.7396 2.70833 36.099 2.36979 36.5156 2.07812C36.9427 1.77604 37.4323 1.53646 37.9844 1.35938C38.5365 1.18229 39.1615 1.09375 39.8594 1.09375H54.5156V5.15625H39.8594C39.3281 5.15625 38.9219 5.29688 38.6406 5.57812C38.3594 5.85938 38.2188 6.27604 38.2188 6.82812V17.7969C38.2188 18.3177 38.3594 18.724 38.6406 19.0156C38.9323 19.2969 39.3385 19.4375 39.8594 19.4375H54.5156V23.5ZM81.8438 23.5H76.0781L66.9375 14.3438H64.0781V6.25H66.9375L76.0781 1.09375H81.8438L70.3281 12.2969L81.8438 23.5ZM62.4531 23.5H58.3906V1.09375H62.4531V23.5ZM88.4844 23.5H84.4219V1.09375H88.4844V23.5ZM115.625 21.7656C115.625 22.0573 115.568 22.3281 115.453 22.5781C115.349 22.8281 115.203 23.0469 115.016 23.2344C114.839 23.4115 114.625 23.5521 114.375 23.6562C114.125 23.7604 113.859 23.8125 113.578 23.8125C113.328 23.8125 113.073 23.7656 112.812 23.6719C112.562 23.5781 112.339 23.4271 112.141 23.2188L97.2969 7.71875V23.5H93.2344V2.82812C93.2344 2.41146 93.349 2.03646 93.5781 1.70312C93.8177 1.35938 94.1198 1.6417 94.4844 0.9375C94.8698 0.78125 95.2656 0.744792 95.6719 0.828125C96.0781 0.90642 96.4271 1.08854 96.7188 1.39062L111.562 16.875V1.09375H115.625V21.7656Z" fill="#2B2D42" />
                    </svg>
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
