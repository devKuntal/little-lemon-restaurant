import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import restaurantFood from "../assets/restauranfood.jpg";
import Testimonials from "../components/Testimonials";
import SpecialCard from "../components/SpecialCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <section className='mt-20'>
        <div className='container md:flex justify-center md:justify-between mx-auto pb-10 px-10'>
          <div>
            <h1 className='text-4xl font-bold text-neutral font-display text-center md:text-left'>
              This weeks specials!
            </h1>
          </div>
          <div>
            <Link
              className='btn btn-wide btn-secondary font-body mt-10 md:mt-0 '
              aria-label='order online button'>
              Order Online
            </Link>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-auto container mb-20 justify-items-stretch'>
        <SpecialCard className='justify-self-center' />
        <SpecialCard />
        <SpecialCard />
      </section>

      <section className='bg-accent py-20'>
        <section>
          <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-bold text-base-100 font-display pb-10'>
              Testimonials
            </h1>
          </div>
        </section>
        <Swiper
          // slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 50 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper mx-20 md:mx-0'>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials />
          </SwiperSlide>
        </Swiper>
      </section>
      <About />
      {/* <section className='grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-2 grid-flow-col justify-center mx-auto container'> */}
      <Footer />
    </>
  );
}
