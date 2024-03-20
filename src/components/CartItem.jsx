import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeProduct } from '../features/product/cartSlice';

function CartItem({product}) {
  const dispatch = useDispatch();
  return (
    <div className='p-4 shadow-xl'>
       <div className='flex gap-8 items-center font-medium'>
          <div className='w-[35%]'>
           <img src={product.image} alt="product" className='h-[14rem] w-[12rem]'/>
          </div>
          <div className='flex w-[75%] items-start flex-col gap-6'>
             <h3 className='text-2xl'>{product.title}</h3>
             <h3 className='text-xl text-red-800'>Price : $ {product.price}</h3>
             <div className='text-xl flex items-center gap-4'>
                <h3 className='w-[8rem]'>Quantity : {product.quantity}</h3>
                <button className='bg-slate-200 px-4 ml-6 py-2 border rounded-lg'
                onClick={() => dispatch(increaseQuantity(product.id))}>
                +
                </button>
                <button className='bg-slate-200 px-4 py-2 border rounded-lg'
                onClick={() => dispatch(decreaseQuantity(product.id))}>
                -
                </button> 
                <button className=' text-base py-2 px-5 bg-red-800 rounded-lg text-white'
                onClick={() => dispatch(removeProduct(product.id))}>
                Remove
                </button>
             </div>
          </div>
       </div>
    </div>
  )
}

export default CartItem