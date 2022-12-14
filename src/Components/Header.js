import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import React from 'react';
const Header = () => {
  return (

<nav className="bg-gray-700 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b overflow-hidden dark:border-gray-600">
  <div className="container flex flex-wrap justify-around items-center mx-auto">
  <div className="flex md:order-2 space-x-4 text-gray-400">
    <FaLinkedin className='text-xl cursor-pointer hover:animate-bounce hover:text-white'/>
    <FaGithub className='text-xl cursor-pointer hover:animate-bounce hover:text-white'/>
    <FaTwitter className='text-xl cursor-pointer hover:animate-bounce hover:text-white'/>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <p className="block text-[1rem] cursor-pointer py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white" >Home</p>
      </li>
      <li>
        <p className="block text-[1rem] cursor-pointer py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</p>
      </li>
      <li>
        <p className="block text-[1rem] cursor-pointer py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</p>
      </li>
      <li>
        <p className="block text-[1rem] cursor-pointer py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Get In Touch</p>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Header