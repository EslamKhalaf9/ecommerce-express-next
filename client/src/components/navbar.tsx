import React from 'react'
import Cart from './icons/cart'

function Navbar() {
  return (
    <nav className='w-screen mx-auto fixed bg-background z-50 shadow-2xl'>
      <div className='container flex justify-between items-center h-[10vh]'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <ul className='flex justify-center items-center gap-4 text-xl'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Products</a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
          <li>
            <Cart className='w-10 cursor-pointer' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar