import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Confirmation() {
  return (
    <>
      <Nav />
      <div className='hero min-h-screen bg-base-100' id='confirmation-page'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Table is Reserved!</h1>
            <p className='py-6'>
              Thank you for your reservation at Little Lemon. Enjoy your food!
            </p>
            <button className='btn btn-primary'>
              <Link to='/'>Return to HomePage</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
