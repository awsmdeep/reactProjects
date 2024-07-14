import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ filterNews }) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <nav className='bg-black p-4'>
            <div className='flex flex-col items-center'>
                <img src="/logo-without-bg.png" alt="logo" className='w-40 h-40 mb-2' />
                <GiHamburgerMenu 
                    className='text-white text-2xl md:hidden cursor-pointer mt-2'
                    onClick={handleToggle}
                />
                <ul className={`flex flex-col md:flex-row justify-between text-white w-full ${show ? 'block' : 'hidden'} md:flex`}>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("everything"); setShow(false); }}>ALL</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("business"); setShow(false); }}>BUSINESS</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("entertainment"); setShow(false); }}>ENTERTAINMENT</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("general"); setShow(false); }}>GENERAL</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("health"); setShow(false); }}>HEALTH</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("science"); setShow(false); }}>SCIENCE</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("sports"); setShow(false); }}>SPORTS</li>
                    <li className='cursor-pointer my-2 md:my-0 p-4 hover:bg-[#00df9a] rounded-xl m-2 duration-300 hover:text-black' onClick={() => { filterNews("technology"); setShow(false); }}>TECHNOLOGY</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
