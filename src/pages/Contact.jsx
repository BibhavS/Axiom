import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Contact() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  
  const submit = (data) => {
      console.log(data);
      alert(`Thank you ${data.fullName} for submitting the form\nWe will contact you very soon`);
      reset();
  }

  return (
     <>
      <h1 className='text-3xl text-indigo-900 font-medium text-center mt-12'>Get in touch with us</h1>
      <div className='mt-12 flex justify-center'>
        <form onSubmit={handleSubmit(submit)} className='p-2 shaodow-xl flex flex-col text-indigo-900 gap-6 xl:w-[32rem] w-[25rem] rounded-xl text-lg'>
          <div className='flex flex-col gap-2'>
             <label htmlFor="fullName" className='ml-1 text-base'>Full Name</label>
             <input id="fullName"
             type="text" placeholder='Full Name' className='border-2 border-indigo-600 outline-none p-2 rounded-lg'
             {...register("fullName", {
               required:true,
             })}/>
             {errors.fullName && <p className='mt-2 text-base text-red-800'>{errors.fullName.message}</p>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor="email" className='ml-1 text-base'>Email</label>
             <input id="email"
             type="email" placeholder='Email' className='border-2 border-indigo-600 outline-none p-2 rounded-lg'
             {...register("email", {
               required: true,
               validate: {
                  matchPattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
                  "Invalid email address"
               }
             })}/>
             {errors.email && <p className='mt-2 text-base text-red-800'>{errors.email.message}</p>}
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor="reason" className='ml-1 text-base'>Reason for Contact</label>
             <input id="reason"
             type="text" placeholder='Reason for Contact' className='border-2 border-indigo-600 outline-none p-2 rounded-lg'
             {...register("reason", {
               required:true,
             })}/>
             {errors.reason && <p className='mt-2 text-base text-red-800'>{errors.reason.message}</p>}
          </div> 
          <button type='submit' className='mt-4 bg-indigo-700 rounded-lg text-white xl:text-2xl text-xl xl:px-5 xl:py-3 px-3 py-2'>Submit</button>
        </form>
      </div>
     </>
  )
}

export default Contact