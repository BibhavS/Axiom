import React from 'react'
import { NavLink} from 'react-router-dom';

function ProductCard({product}) {
  return (
    <>
      <div className='p-6 flex flex-col relative m-10 items-center justify-center text-2xl font-medium gap-12 shadow-2xl rounded-2xl'>
         <div>
          <NavLink to={`/products/${product?.id}`}>
            <img src={product?.image} alt="product" className='h-44 w-40'/>
          </NavLink>
         </div>
         <div className='text-center'>
           <h3 className='text-[1.6rem] '>{product?.title}</h3>
         </div>
         <div className='text-center mt-auto'>
           <h3 className='text-red-800 mt-auto'>Price : $ {product?.price}</h3>
         </div>
      </div>
    </>
  )
}

export default ProductCard