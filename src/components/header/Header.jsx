import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaSearch, FaInfoCircle } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import {MdHome} from 'react-icons/md';
import {AiFillShopping} from 'react-icons/ai';
import {RiLoginBoxLine} from 'react-icons/ri';
import {FaArrowRightLong} from 'react-icons/fa6';
import {GoSearch} from 'react-icons/go';
import brandLogo from '../../assets/images/nuolar.png';
import PropTypes from 'prop-types';

// Remove this after dynamic data load from database
const product = {
  'thumbnail': 'https://i.ibb.co/Y3kVjnb/polo-shirt-1.png',
  'name': 'Polo Shirt 1',
  'price': 600,
  'rating': 5.00
}

const CartItemComponent = ({product}) => {
  const {thumbnail, name, price} = product;
  // Remove this after dynamic data load from database
  const quantity = 2;

  return (
    <div className="flex justify-between items-center gap-4 border-b border-gray-300 py-2">
      <img src={thumbnail} alt="Product's Image" className="w-full max-w-[60px] rounded-lg" />
      <div className="flex-1">
        <h4 className="text-[18px] font-medium mb-1">{name}</h4>
        <div className="text-gray-500 space-x-6">
          <span>X {quantity}</span>
          <span>&#2547; {price * quantity}</span>
        </div>
      </div>
      <div className="p-2 text-xl cursor-pointer select-none">
        <FaXmark />
      </div>
    </div>
  );
}

export const Header = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const drawerRef = useRef(null);
  const barRef = useRef(null);
  const searchRef = useRef(null);
  const searchIconRef = useRef(null);
  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = e => {
      if (barRef.current && !barRef.current?.contains(e.target)) {
        if (drawerRef.current && !drawerRef.current?.contains(e.target)) {
          setDrawerShow(false);
        }
      }
      if (searchIconRef.current && !searchIconRef.current?.contains(e.target)) {
        if (searchRef.current && !searchRef.current?.contains(e.target)) {
          setSearchShow(false);
        }
      }
      if (cartIconRef.current && !cartIconRef.current?.contains(e.target)) {
        if (cartRef.current && !cartRef.current?.contains(e.target)) {
          setCartShow(false);
        }
      }
    }
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); 

  return (
    <header className="py-4 border-b border-gray-300 fixed top-0 left-0 right-0 bg-white z-40">
      <div className="container">
        <nav className="flex justify-between items-center gap-4 relative">
          <div className="flex justify-center items-center gap-3">
            <div className="bar md:hidden border border-gray-300 p-2 rounded text-xl cursor-pointer select-none" onClick={() => setDrawerShow(true)} ref={barRef}>
              <FaBars />
            </div>
            <Link to='/'>
              <img src={brandLogo} alt="Brand Logo" className="w-[100px]" />
            </Link>
          </div>

          <div className="hidden md:flex justify-center items-center gap-6 font-medium">
            <NavLink to='/' className={({isActive}) => isActive ? 'text-primary' : ''}>Home</NavLink>
            <NavLink to='/shop' className={({isActive}) => isActive ? 'text-primary' : ''}>Shop Now</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? 'text-primary' : ''}>About Us</NavLink>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div>
              <div className="text-xl text-primary cursor-pointer select-none" onClick={() => setSearchShow(!searchShow)} ref={searchIconRef}>
                <FaSearch />
              </div>

              <form className={`absolute right-0 top-[calc(100%+20px)] w-full max-w-[350px] transition-transform origin-top duration-300 ${searchShow ? 'scale-y-100' : 'scale-y-0'}`} ref={searchRef}>
                <input className="input w-full bg-gray-50 border border-gray-300 shadow-lg pl-[36px]" type="search" name="search" id="search" placeholder="Search Product" required />
                <label htmlFor="search" className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer select-none">
                  <GoSearch className="text-[18px]" />
                </label>
              </form>
            </div>
            <div>
              <div className="text-2xl text-primary cursor-pointer select-none" onClick={() => setCartShow(!cartShow)} ref={cartIconRef}>
                <FaShoppingCart />
              </div>

              <div className={`bg-gray-50 shadow-lg p-4 pb-3 border border-gray-300 absolute top-[calc(100%+20px)] right-0 w-full max-w-[350px] rounded-lg transition-transform duration-300 origin-top ${cartShow ? 'scale-y-100' : 'scale-y-0'}`} ref={cartRef}>
                <div className="[&>*:first-child]:pt-0 [&>*:last-child]:mb-4">
                  <CartItemComponent product={product} />
                  <CartItemComponent product={product} />
                  <CartItemComponent product={product} />
                </div>
                <Link to='/cart' className="text-primary font-medium flex justify-center items-center gap-2" onClick={() => setCartShow(false)}>See All <FaArrowRightLong /></Link>
              </div>
            </div>
            <div>
              <Link to='/login' className="btn btn-secondary hidden md:inline-flex">Login</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Header Drawer */}
      <div className="md:hidden fixed top-0 bottom-0 w-3/4 max-w-[300px] bg-white z-50 [box-shadow:5px_0px_50px_rgba(0,0,0,0.3)] transition-[left] duration-300" style={drawerShow ? {left: '0'} : {left: '-350px'}} ref={drawerRef}>
        <div className="flex justify-between items-center gap-4 px-6 pt-6 pb-4">
          <h4 className="text-secondary text-xl uppercase font-semibold ml-[2px]">Pages</h4>
          <FaXmark className="text-2xl cursor-pointer select-none" onClick={() => setDrawerShow(false)} />
        </div>
        <div className="flex flex-col font-medium">
          <NavLink to='/' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <MdHome className="text-xl" />
              Home
            </div>
            <FaArrowRightLong className="mr-2" />
          </NavLink>
          <NavLink to='/shop' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <AiFillShopping className="text-xl" />
              Shop Now
            </div>
            <FaArrowRightLong className="mr-2" />
          </NavLink>
          <NavLink to='/about' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <FaInfoCircle className="text-xl" />
              About Us
            </div>
            <FaArrowRightLong className="mr-2" />
          </NavLink>
          <NavLink to='/login' className="flex justify-between items-center gap-3 px-6 py-3" style={({isActive}) => isActive ? {color: '#D71E44'} : {}} onClick={() => setDrawerShow(false)}>
            <div className="flex items-center gap-3">
              <RiLoginBoxLine className="text-xl" />
              Login
            </div>
            <FaArrowRightLong className="mr-2" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

CartItemComponent.propTypes = {
  product: PropTypes.object
}