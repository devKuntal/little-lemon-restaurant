import React from "react";
import { Link } from "react-router-dom";
import restaurantFood from "../assets/restauranfood.jpg";

export default function Hero() {
  return (
    <>
      <header className='bg-primary'>
        <div className='hero py-10 px-10'>
          <div className='hero-content flex-col lg:flex-row-reverse justify-between'>
            <img
              src={restaurantFood}
              className='max-w-sm rounded-lg shadow-2xl h-96 w-96 object-cover'
              alt='restaurant food'
            />
            <div className='lg:w-6/12'>
              <h1 className='text-5xl font-bold text-secondary font-display'>
                Little Lemon
              </h1>
              <h3 className='text-3xl font-medium text-base-100 font-display'>
                Chicago
              </h3>
              <p className='py-6 text-base-100 font-body'>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>

              <Link
                to='/reservations'
                className='btn btn-wide btn-secondary font-body'
                aria-label='table reservation button'>
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
