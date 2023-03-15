import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className='bg-primary'>
        <footer className='footer p-10 text-base-100 container mx-auto justify-center md:justify-between '>
          <div>
            <img src={logo} alt='logo' className='' />
            <p>
              <span className='text-secondary font-bold text-xl'>
                Little Lemon
              </span>
              <br />
              Chicago
              <br />
              Providing Quality food since 2000
            </p>
          </div>
          <div>
            <span className='footer-title'>Useful Links</span>
            <ul>
              <li className='link link-hover'>
                <Link to='/'>Home</Link>
              </li>
              <li className='link link-hover'>
                <Link to='/'>Login</Link>
              </li>
              <li className='link link-hover'>
                <Link to='/reservations'>Reservations</Link>
              </li>
              <li className='link link-hover'>
                <Link to='/'>Order-online</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className='footer-title'>Company</span>
            <Link to='/#about' className='link link-hover'>
              About us
            </Link>
            <Link to='/' className='link link-hover'>
              Contact
            </Link>
            <Link to='/' className='link link-hover'>
              Privacy policy
            </Link>
            <Link to='/' className='link link-hover'>
              Customer support
            </Link>
          </div>
          <div>
            <span className='footer-title'>Socials</span>
            <Link to='https://facebook.com' className='link link-hover'>
              Facebook
            </Link>
            <Link to='https://instagram.com' className='link link-hover'>
              Instagram
            </Link>
            <Link to='https://twitter.com' className='link link-hover'>
              Twitter
            </Link>
            <Link to='https://yelp.com' className='link link-hover'>
              Yelp
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
