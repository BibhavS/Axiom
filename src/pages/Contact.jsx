import React, { useState } from 'react'

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState();
  const [reason, setReason] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();
      let counter = 0;
      if(fullName.trim().length == 0){
         alert("Name cannot be empty");
         counter++;
      }
      if(email.trim().length == 0 && email.trim().includes('@')){
         alert("Invalid email");
         counter++;
      }
      if(number.trim().length < 8){
         alert("Invalid number");
         counter++;
      }
      if(reason.trim().length < 5){
         alert("Please write valid reasons");
         counter++;
      }

      if(counter === 0){
         alert("Thank you for submitting the form. We will soon contact you");
         setEmail('');
         setFullName('');
         setNumber('');
         setReason('');
      }
   }
  return (
     <>
      <h1 className='text-3xl text-indigo-900 font-medium text-center mt-8'>Get in touch with us</h1>
      <div className='mt-8 flex justify-center'>
        <form className='p-2 shaodow-xl flex flex-col text-indigo-900 gap-6 w-[32rem] rounded-xl text-lg'>
          <div className='flex flex-col gap-2'>
             <label htmlFor="" className='ml-1 text-base'>Full Name</label>
             <input onChange={(e) => setFullName(e.target.value)} value={fullName}
             type="text" placeholder='Full Name' className='border-2 border-indigo-600 outline-none p-2 rounded-lg'/>
          </div>
          <div className='flex flex-col gap-2'>
             <label htmlFor="" className='ml-1 text-base'>Email</label>
             <input onChange={(e) => setEmail(e.target.value)} value={email}
             type="email" placeholder='Email' className='border-2 border-indigo-600 outline-none p-2 rounded-lg'/>
          </div>
          <div className='flex flex-col gap-2 '>
             <label htmlFor="" className='ml-1 text-base'>Number</label>
             <input onChange={(e) => setNumber(e.target.value)} value={number}
             type="number" placeholder='Number' className='border-2  border-indigo-600 outline-none p-2 rounded-lg'/>
          </div> 
          <div className='flex flex-col gap-2'>
             <label htmlFor="" className='ml-1 text-base'>Reason for Contact</label>
             <input onChange={(e) => setReason(e.target.value)} value={reason}
             type="text" placeholder='Reason for Contact' className='border-2 border-indigo-600 outline-none p-2 rounded-lg'/>
          </div> 
          <button className='mt-4 bg-indigo-700 rounded-lg text-white text-2xl px-5 py-3' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
     </>
  )
}

export default Contact