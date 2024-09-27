import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav
        className="flex items-center justify-between flex-wrap bg-white py-3 md:px-24 lg:px-64 shadow border-solid border-t-2 border-blue-700">
        {/*lOGO SECTION  */}
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 ">
                <img className='h-[30px]' src={Logo} alt="" />
            </div>
            <div className="block lg:hidden ">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        {/*NAVIGATION MENU ITEMS  */}
        <div className="menu w-full lg:flex flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div className="gap-2 flex grow text-md font-base text-black">
                <div className="flex rounded-full text-primary p-1 items-center gap-2">
                    <p className='font-base ml-2'>Products</p>
                    <div className="p-2 rounded-full ">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className="flex rounded-full text-primary p-1 items-center gap-2">
                    <p className='font-base ml-2'>Solutions</p>
                    <div className="p-2 rounded-full ">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className="flex rounded-full text-primary p-1 items-center gap-2">
                    <p className='font-base ml-2'>Pricing</p>
                    <div className="p-2 rounded-full ">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className="flex rounded-full text-primary p-1 items-center gap-2">
                    <p className='font-base ml-2'>Resources</p>
                    <div className="p-2 rounded-full ">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className="flex rounded-full text-primary p-1 items-center gap-2">
                    <p className='font-base ml-2'>About Us</p>
                    <div className="p-2 rounded-full ">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </div>

            {/* LOGIN AND LOCALISATION SECTION */}
            <div className="flex flex-none justify-end">
                <div className="flex border-solid border-[1px] border-primary rounded-full p-1 items-center gap-2">
                    <p className='font-base ml-2 text-primary'>En</p>
                    <div className="p-2 text-primary rounded-full ">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className="ml-2 flex border-solid border-[1px] border-primary rounded-full p-1 items-center gap-2">
                    <p className='font-base ml-2 text-primary'>Log in</p>
                    <div className="p-2 bg-primary text-white rounded-full ">
                        <FaUser />
                    </div>
                </div>
            </div>
            
        </div>
    </nav>
  )
}

export default NavBar