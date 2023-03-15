import React from "react";
import { useState, useEffect } from "react";
import { fetchAPI } from "../BookingsAPI";

export default function ReservationForm(props) {
  const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [occasion, setOccasion] = useState("");

  useEffect(() => {
    if (!date) return;
    setAvailableTimes(fetchAPI(new Date(date)));
  }, [date]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ name, date, time, email, people, occasion });

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Date: ", date);
    console.log("Time: ", time);
    console.log("people: ", people);
    console.log("Occasion: ", occasion);
  };

  return (
    <form className='lg:text-center lg:w-2/4' onSubmit={handleSubmit}>
      <div className='lg:text-center'>
        <label htmlFor='name' className='label font-body'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='input input-bordered input-neutral w-full max-w-xs font-body'
          placeholder='First Name'
          required
          minLength={2}
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor='email' className='label font-body'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='input input-bordered input-neutral w-full max-w-xs font-body'
          placeholder='Email'
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor='people' className='label font-body'>
          Number of People
        </label>
        <input
          type='number'
          id='people'
          className='input input-bordered input-neutral w-full max-w-xs font-body'
          placeholder='Number of People'
          value={people}
          required
          min={1}
          max={20}
          onChange={(e) => setPeople(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor='date' className='label font-body'>
          Select Date
        </label>
        <input
          type='date'
          id='date'
          name='date'
          className='input input-bordered input-neutral w-full max-w-xs font-body'
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}></input>
      </div>

      <div>
        <label htmlFor='time' className='label font-body'>
          Select Time
        </label>
        <select
          id='time'
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          className='select select-bordered w-full max-w-xs font-body'
          required>
          <option></option>
          {availableTimes.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='occasion' className='label font-body'>
          Occasion
        </label>
        <select
          id='occasion'
          className='select select-bordered w-full max-w-xs font-body'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}>
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <input
          disabled={!(name && date && email && time && people && occasion)}
          className='btn btn-primary px-10 mt-10'
          type='submit'
          value='Confirm Reservation'
          aria-label='confirm reservations button'></input>
      </div>
    </form>
  );
}
