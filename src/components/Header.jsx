import React, { useState, useEffect } from 'react';
import img from '../assets/logonew2.png';
import { Link, NavLink } from 'react-router-dom';

function Header({ login, setLogin, signup, setSignup, authpage, setAuthpage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const handleLoginClick = () => {
    setAuthpage(!authpage);
    setLogin(!login);
  };

  const handleSignupClick = () => {
    setAuthpage(!authpage);
    setSignup(!signup);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='w-full h-20 bg-[#5956e9] text-white'>
      <nav className='w-full h-full flex justify-between items-center px-4 sm:px-8 '>
        <Link to='/' className='flex justify-center items-center'>
          <span>
            <img src={img} alt="logo" className='w-14 sm:w-14' loading="lazy" />
          </span>
          <span className='hidden lg:block text-xl sm:text-2xl font-bold ml-2'>Epic Reads</span>
        </Link>
        <div className='hidden lg:flex'>
          <ul className='flex gap-4 sm:gap-8 md:gap-10'>
            <NavLink to='/' className='cursor-pointer'>Home</NavLink>
            <li className='cursor-pointer'>About</li>
            <NavLink to='/store' className='cursor-pointer'>Store</NavLink>
            <NavLink to='/contact' className='cursor-pointer'>Contact Us</NavLink>
          </ul>
        </div>
        <div className='absolute right-10 md:right-20 lg:right-0 lg:relative flex justify-center items-center gap-4 sm:gap-6 md:gap-8'>
          <div>
            <button className='py-2 px-3 sm:px-4 bg-white rounded-3xl text-[#5956e9] font-bold' onClick={handleLoginClick}>
              Login
            </button>
          </div>
          <div>
            <button onClick={handleSignupClick} className='hidden md:flex py-2 px-3 sm:px-4 bg-black rounded-3xl text-white font-bold justify-center items-center'>
              Sign up
            </button>
          </div>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='md:hidden bg-[#5956e9] w-full h-full fixed top-20 z-50'>
          <ul className='flex flex-col items-center '>
            <NavLink to='/' className='cursor-pointer py-2' onClick={toggleMenu}>Home</NavLink>
            <li className='cursor-pointer py-2' onClick={toggleMenu}>About</li>
            <NavLink to='/store' className='cursor-pointer py-2' onClick={toggleMenu}>Store</NavLink>
            <li className='cursor-pointer py-2' onClick={toggleMenu}>Contact Us</li>
            <li><button onClick={handleSignupClick} className='mt-5 py-2 px-3 sm:px-4 underline rounded-3xl text-white font-bold justify-center items-center'>
              Sign up
            </button></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
