import React from 'react'

export default function Nav() {
  return (
    <>
      <nav>
        <img src="../assets/image/little-lemon-logo.png" alt="little-lemon-logo" />
        <ul className='nav-links'>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/order'>Order-Online</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}
