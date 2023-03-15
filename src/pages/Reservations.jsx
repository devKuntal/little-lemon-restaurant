import React from "react";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../BookingsAPI";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import { useReducer } from "react";
// import { fetchAPI } from "../../BookingsAPI";
// import restaurant from "../../assets/restaurant.jpg";

export default function Reservations() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className='container flex mx-auto lg:20 xl:ml-28 2xl:ml-72 p-10 justify-center'>
        <BookingForm
          onSubmit={({ name, date, time, email, people, occasion }) => {
            const succeeded = submitAPI({
              name,
              date,
              time,
              email,
              people,
              occasion,
            });
            if (succeeded) {
              navigate({
                pathname: "/confirmation",
                search: `?name=${name}&email=${email}&date=${date}&time=${time}&people=${people}&occasion=${occasion}`,
              });
            } else {
              window.alert("Please try again.");
            }
          }}
        />
      </div>
      <Footer />
    </>
  );
}
