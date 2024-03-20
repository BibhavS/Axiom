import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
     <>
      <div className='text-center h-[9/10]'>
        <div className='mt-[7.5rem] font-medium flex flex-col tracking-wider items-center gap-[3.4rem]'>
           <h1 className='text-indigo-900 text-8xl'>Axiom</h1>
           <h1 className='text-[3.5rem] mb-8'>Refined Quality for Discerning Taste</h1>
           <Link to='/products'>
            <Button text='Shop Now' className='bg-indigo-900 text-4xl px-10 text-white rounded-3xl py-4'/>
           </Link> 
        </div>
      </div>
     </> 
)}

export default Home