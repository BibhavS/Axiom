import React from 'react'
import logo from '../assets/shopLogo.png'
import { NavLink, Link, useActionData } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
    const data = useSelector(state => state.cart)
    return (
        <div>
            <div className='md:h-20 shadow-xl flex items-center xl:px-16 px-10 py-[3.5rem] justify-between bg-slate-100'>
                <div className='flex items-center lg:w-28'>
                    <img src={logo} alt="logo" className='xl:h-24 xl:w-28 h-16 w-20' />
                    <div className='text-3xl xl:block hidden tracking-widest font-semibold text-indigo-900'>
                        <span>Axiom</span>
                    </div>
                </div>
                <div className='flex gap-8 items-center xl:text-2xl lg:text-xl text-base font-semibold'>
                    <NavLink to='/' className={({ isActive }) => `${isActive ? 'text-indigo-900' : 'text-black'}`}>
                        Home
                    </NavLink>
                    <NavLink to='/products' className={({ isActive }) => `${isActive ? 'text-indigo-900' : 'text-black'}`}>
                        Products
                    </NavLink>
                    <NavLink to='/search' className={({ isActive }) => `${isActive ? 'text-indigo-900' : 'text-black'}`}>
                        Search
                    </NavLink>
                    <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'text-indigo-900' : 'text-black'}`}>
                        Contact Us
                    </NavLink>
                    <NavLink to='/cart' className={({ isActive }) => `${isActive ? 'text-indigo-900' : 'text-black'}`}>
                        My Cart
                    </NavLink>
                </div>
                <div className='flex items-center gap-3 lg:w-28'>
                    <Link to='/cart'>
                        <FaShoppingCart className='xl:h-10 xl:w-10 h-6 w-6' color='#312e81' />
                    </Link>
                    <span className=' text-indigo-900 xl:text-2xl text-xl font-semibold'>{data.cartProducts.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header