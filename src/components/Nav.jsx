import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Nav() {
  return (
    <>
      <nav className='navbar px-10 bg-base-100 container mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-body'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/#about'>About</Link>
              </li>
              <li>
                <Link to='/reservations'>Reservations</Link>
              </li>
              <li>
                <Link to='/'>Order-online</Link>
              </li>
            </ul>
          </div>
          <img src={logo} alt='logo' className='ml-4 lg:ml-0' />
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 font-body font-[500]'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/#about'>About</Link>
            </li>
            <li>
              <Link to='/reservations'>Reservations</Link>
            </li>
            <li>
              <Link to='/'>Order-online</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <Link
            to='/'
            className='btn btn-secondary md:px-12 font-bold font-body'>
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
