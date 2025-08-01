import React from 'react';
import { assets } from '../assets/assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="Logo" />
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <li>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="Search Icon" />
        
        <div className='group relative'> +
          <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile Icon" />
          <div className='absolute right-0 mt-2 hidden group-hover:block bg-white shadow-md p-2 rounded'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>

        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
