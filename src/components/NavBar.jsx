import React from 'react'
import logo from '../assets/logo.png';
import {navItems} from '../constants';

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 py 30 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center py-2">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={logo} alt='logo' />
                        <span className="text-xl tracking-tight">Developer</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems?.map((item, index) => (
                            <li key={index}>
                                <a href={item?.href}>{item?.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href='#' className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-violet-500 to-purple-950 py-2 px-3 rounded-md">Create an account</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
