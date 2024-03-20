import React from 'react'
import logo from '../assets/shopLogo.png'
import { NavLink, Link, useActionData } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
    const data = useSelector(state => state.cart)
    return (
        <div>
            <div className='h-20 shadow-xl flex items-center px-16 py-[3.5rem] justify-between bg-slate-100'>
                <div className='flex items-center w-28'>
                    <img src={logo} alt="logo" className='h-24 w-28' />
                    <div className='text-3xl tracking-widest font-semibold text-indigo-900'>
                        <span>Axiom</span>
                    </div>
                </div>
                <div className='flex gap-8 items-center text-2xl font-semibold'>
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
                <div className='w-28 flex items-center gap-5'>
                    <Link to='/cart'>
                        <FaShoppingCart size={40} color='#312e81' />
                    </Link>
                    <span className=' text-indigo-900 text-2xl font-semibold'>{data.cartProducts.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header