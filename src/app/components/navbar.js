"use client";

import Image from 'next/image'
import CocaLogo from '../../../public/coca-logo.png'
import { useState } from 'react'

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className="container max-w-screen-lg py-4 mx-auto flex justify-between px-4 lg:px-0">
      <div className="flex row">
        <Image className='w-auto h-8 mt-1' src={CocaLogo} alt='logo' />
        <div className="flex row mt-2 ml-14 hidden md:flex">
          <div className="mx-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-green-600">About</div>
          <div className="mx-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-green-600">Blog</div>
          <div className="mx-3 cursor-pointer text-sm font-medium text-gray-400 hover:text-green-600">Contact</div>
        </div>
      </div>
      <div className='hidden md:flex'>
        <button className="bg-green-600 hover:bg-green-700 text-xs text-white font-medium py-2 px-4 rounded">
          Sign In
        </button>
      </div>

      <div className='flex md:hidden'>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      </div>

      <div className={open ? 'mobile-menu menu-open':'mobile-menu'}>
        <button onClick={toggleMenu} className="btn btn-close"></button>

        <div className="h-screen flex items-center justify-center">
          <div className="flex flex-col">
            <div className='text-white text-center text-4xl my-4'>About</div>
            <div className='text-white text-center text-4xl my-4'>Blog</div>
            <div className='text-white text-center text-4xl my-4'>Contact</div>

            <button className="bg-green-600 hover:bg-green-700 text-md text-white font-medium py-2 px-4 rounded mx-auto mt-6">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
