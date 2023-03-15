import React from "react";
import cycle from "../assets/Vector.svg";
import restaurantFood from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

export default function SpecialCard() {
  return (
    <>
      <div className='container flex justify-between mx-auto px-10 hover:scale-105'>
        <div className='card w-80 bg-base-100 shadow-xl'>
          <figure>
            <img
              src={restaurantFood}
              alt='food image'
              className='h-80 w-80 object-cover'
            />
          </figure>
          <div className='card-body'>
            <div className='flex justify-between'>
              <h2 className='card-title'>Shoes!</h2>
              <h2 className='card-title'>$12.99</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-secondary text-primary'>
                <Link to='/'>Order a delivery</Link>
                <img src={cycle} className='w-6 h-6 mx-1' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
