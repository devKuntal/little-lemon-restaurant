import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Nav />
      <div className='hero min-h-screen bg-base-100' id='error-page'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Oops!</h1>
            <p className='py-6'>Sorry, an unexpected error has occurred</p>
            {/* <p className='pb-6'>
              <i>{error.statusText || error.message}</i>
            </p> */}
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
