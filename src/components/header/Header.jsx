import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import {MdHome} from 'react-icons/md';
import {AiFillShopping} from 'react-icons/ai';
import {RiLoginBoxLine} from 'react-icons/ri';
import {FaArrowRightLong} from 'react-icons/fa6';
import brandLogo from '../../assets/images/nuolar.png';

export const Header = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleDrawerClick = e => {
      if (drawerRef.current && !drawerRef.current?.contains(e.target) && !(e.target.id == 'bar' || e.target.id == 'bar-container')) {
        setDrawerShow(false);
      }
    }
    document.addEventListener('click', handleDrawerClick);

    return () => {
      document.removeEventListener('click', handleDrawerClick);
    };
  }, []); 

  return (
    <header className="py-4 border-b border-gray-300">
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-3">
            <div className="bar md:hidden border border-gray-300 p-2 rounded text-xl cursor-pointer select-none" onClick={() => setDrawerShow(true)} id="bar-container">
              <FaBars id="bar" />
            </div>
            <Link to='/'>
              <img src={brandLogo} alt="Brand Logo" className="w-[100px]" />
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center gap-6 font-medium">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-primary' : ''}>Home</NavLink>
            <NavLink to='/shop' className={({isActive}) => isActive ? 'text-primary' : ''}>Shop Now</NavLink>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div>
              <FaShoppingCart className="text-2xl text-primary cursor-pointer select-none" />
            </div>
            <div>
              <Link to='/login' className="btn btn-secondary hidden md:inline-flex">Login</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Header Drawer */}
      <div className="md:hidden fixed top-0 bottom-0 w-3/4 max-w-[300px] bg-white z-50 [box-shadow:5px_0px_50px_rgba(0,0,0,0.3)] transition-[left] duration-300" style={drawerShow ? {left: '0'} : {left: '-350px'}} ref={drawerRef}>
        <div className="flex justify-between items-center gap-4 px-6 py-6">
          <h4 className="text-secondary text-xl uppercase font-semibold">Pages</h4>
          <FaXmark className="text-2xl cursor-pointer select-none" onClick={() => setDrawerShow(false)} />
        </div>
        <div className="flex flex-col font-medium">
          <NavLink to='/' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <MdHome className="text-xl" />
              Home
            </div>
            <FaArrowRightLong />
          </NavLink>
          <NavLink to='/shop' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <AiFillShopping className="text-xl" />
              Shop Now
            </div>
            <FaArrowRightLong />
          </NavLink>
          <NavLink to='/login' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <RiLoginBoxLine className="text-xl" />
              Login
            </div>
            <FaArrowRightLong />
          </NavLink>
        </div>
      </div>
    </header>
  );
};