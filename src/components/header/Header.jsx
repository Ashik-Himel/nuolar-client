import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import brandLogo from '../../assets/images/nuolar.png';

export const Header = () => {
  const [drawerShow, setDrawerShow] = useState(false);

  const handleDrawerClick = e => {
    if (e.target.tagName == 'A') {
      setDrawerShow(false);
    }
  }

  return (
    <header className="py-4 border-b border-gray-300">
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center gap-3">
            <div className="md:hidden border border-gray-300 p-2 rounded text-xl cursor-pointer select-none" onClick={() => setDrawerShow(!drawerShow)}>
              {
                drawerShow ? <FaXmark /> : <FaBars />
              }
            </div>
            <Link to='/'>
              <img src={brandLogo} alt="Brand Logo" className="w-[100px]" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-2 text-[18px] md:text-base font-medium fixed top-0 bottom-0 md:static bg-white md:bg-none [box-shadow:-5px_0px_50px_rgba(0,0,0,0.3)] md:shadow-none w-4/5 max-w-[300px] md:w-auto md:max-w-none transition-[right] duration-300 z-50" style={drawerShow ? {right: '0'} : {right: '-350px'}} onClick={handleDrawerClick}>
            <NavLink to='/' className={({isActive}) => isActive ? 'text-primary' : ''}>Home</NavLink>
            <NavLink to='/shop' className={({isActive}) => isActive ? 'text-primary' : ''}>Shop Now</NavLink>
            <Link to='/login' className="btn btn-secondary md:hidden mt-2">Login</Link>
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
    </header>
  );
};