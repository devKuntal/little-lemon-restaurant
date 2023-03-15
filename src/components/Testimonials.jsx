import React from "react";
import restaurantFood from "../assets/restauranfood.jpg";

export default function Testimonials() {
  return (
    <>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure className='lg:pl-5 pt-5'>
          <img
            src={restaurantFood}
            alt='user'
            className='object-cover w-16 h-16 rounded-full'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>User</h2>
          <div className='rating'>
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-secondary'
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-secondary'
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-secondary'
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-secondary'
            />
            <input
              type='radio'
              name='rating-2'
              className='mask mask-star-2 bg-secondary'
            />
          </div>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </>
  );
}
