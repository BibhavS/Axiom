import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
     <>
      <div className='text-center h-[9/10]'>
        <div className='xl:mt-[7.5rem] mt-[5rem] font-medium flex flex-col tracking-wider items-center gap-[4rem]'>
           <h1 className='text-indigo-900 xl:text-8xl text-6xl font-medium'>Axiom</h1>
           <h1 className='xl:text-[3rem] text-3xl mb-5'>Refined Quality for Discerning Taste</h1>
           <Link to='/products'>
            <Button text='Shop Now' className='bg-indigo-900 xl:text-4xl text-2xl lg:px-16 px-10 py-3 text-white rounded-full lg:py-5'/>
           </Link> 
        </div>
      </div>
     </> 
)}

export default Home