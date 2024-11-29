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

   const onCheckout = () => {
         alert("Thank you for checking out");
   }

   const discount = 0;
   return (
      <div className='flex gap-10 my-16 px-8'>
         <div className='xl:w-1/2 w-2/3'>
            {products.length === 0 ? (
               <h1 className='xl:text-5xl text-3xl text-center font-medium mt-6 text-indigo-800'>No Items in the cart</h1>
            ) : (
               <div className='flex flex-col gap-4 px-4'>
                  {products.map(product => (
                     <CartItem key={product.id} product={product} />
                  ))}
               </div>
            )}
         </div>
         <div className='xl:w-1/2 w-1/3 p-10 bg-gray-100 h-[30rem] text-2xl font-normal rounded-lg  border'>
            <h1 className='text-indigo-800 xl:text-4xl text-3xl font-medium mb-12'>Order Summary</h1>
            <div className='flex flex-col gap-6 xl:text-2xl text-base'>
               <h1>Subtotal ({totalItems} items) :  $ {totalAmount}.99
               </h1>
               <h1>Shipping Fee :  $ {totalItems * 2}.00</h1>
               <h1>Shipping Fee Discount :  $ {discount}.00</h1>
               <h1>Total :  $ {(totalItems * 2) + totalAmount}.99</h1>
            </div>
            <Button text='Proceed to Checkout' className='mt-12 xl:text-2xl text-xl bg-indigo-700 text-white xl:px-6 xl:py-3 py-2 px-4 rounded-lg' />
         </div>
      </div>
   )
}

export default Cart