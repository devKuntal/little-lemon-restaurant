import React from "react";
import chef from "../assets/Chef.jpg";
import restaurant from "../assets/restaurant.jpg";

export default function About() {
  return (
    <>
      <section
        className='hero py-10 px-10 bg-base-100 container mx-auto'
        id='about'>
        <div className='hero-content flex-col lg:flex-row-reverse justify-between'>
          <div className='flex items-center'>
            <img
              src={chef}
              className='max-w-sm rounded-lg shadow-2xl h-0 w-0 lg:h-48 lg:w-48 object-cover mr-4 invisible lg:visible'
              alt='restaurant chef'
            />
            <img
              src={restaurant}
              className='max-w-sm rounded-lg shadow-2xl h-96 w-96 object-cover'
              alt='restaurent sitting area'
            />
          </div>
          <div className='lg:w-6/12'>
            <h1 className='text-4xl font-bold text-accent font-display text-center lg:text-left mt-10 lg:mt-0'>
              About Us
            </h1>
            <h3 className='text-xl font-medium text-neutral font-display text-center lg:text-left'>
              Little Lemon Chicago
            </h3>
            <p className='py-12 text-neutral font-body text-center lg:text-left'>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Vivamus finibus eget justo
              in varius. Suspendisse sit amet neque id ante pellentesque
              eleifend. Sed eu lorem vel ipsum mattis fringilla ac eget ligula.
              Sed in dapibus orci, at feugiat metus. Phasellus pellentesque
              ullamcorper venenatis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
