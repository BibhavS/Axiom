import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import Button from '../components/Button';

function Cart() {
   const products = useSelector(state => state.cart.cartProducts);
   const totalItems = products.reduce((totalQuantity, currProduct) => {
      return totalQuantity + (currProduct.quantity)
   }, 0)

   const totalAmount = products.reduce((totalPrice, currProduct) => {
      return totalPrice + (currProduct.quantity * Math.round(Number(currProduct.price)))
   }, 0)

   const discount = 0;
   return (
      <div className='flex gap-10 my-16 px-8'>
         <div className='w-1/2'>
            {products.length === 0 ? (
               <h1 className='text-5xl text-center font-medium mt-6 text-indigo-800'>No Items in the cart</h1>
            ) : (
               <div className='flex flex-col gap-4 px-4'>
                  {products.map(product => (
                     <CartItem key={product.id} product={product} />
                  ))}
               </div>
            )}
         </div>
         <div className='w-1/2 p-10 bg-gray-100 h-[30rem] text-2xl font-normal rounded-lg  border'>
            <h1 className='text-indigo-800 text-4xl font-medium mb-12'>Order Summary</h1>
            <div className='flex flex-col gap-6'>
               <h1>Subtotal ({totalItems} items) :  $ {totalAmount}.99
               </h1>
               <h1>Shipping Fee :  $ {totalItems * 2}.00</h1>
               <h1>Shipping Fee Discount :  $ {discount}.00</h1>
               <h1>Total :  $ {(totalItems * 2) + totalAmount}.99</h1>
            </div>
            <Button text='Proceed to Checkout' className='mt-12 text-2xl bg-indigo-700 text-white px-6 py-3 rounded-lg' />
         </div>
      </div>
   )
}

export default Cart