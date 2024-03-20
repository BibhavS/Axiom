import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../contexts/productContext';
import { addProduct } from '../features/product/cartSlice';
import { useDispatch } from 'react-redux';
import loading from '../assets/loadingIcon.gif';

function ProductDetail() {
  const { productId } = useParams();

  const { data, isLoading, isError } = useProduct();

  const product = data?.find(item => item.id == productId);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <img src={loading} className="gif mt-6" alt="loading" />
      </div>
    )
  }

  if (isError) return (
    <h1 className='text-3xl font-semibold text-center text-indigo-900 mt-16'>Some error occured while fetching products</h1>
  )

  return (
    <>
      <div className='flex gap-20 mt-16 px-20'>
        <div className='w-2/5 flex justify-center'>
          <img src={product?.image} alt="product" className='h-[28rem]' />
        </div>
        <div className='w-3/5 flex flex-col items-start gap-8'>
          {(product?.title.length >= 40) ? (
            <p className='text-4xl font-medium'>{product?.title}</p>
          ) : (
            <p className='text-5xl font-medium'>{product?.title}</p>
          )}
          {(product?.description.length >= 400) ? (
            <p className='text-lg text-justify'>{product?.description}</p>
          ) : (
            <p className='text-2xl text-justify'>{product?.description}</p>
          )}
          <p className='text-3xl font-medium text-red-800'>Price : $ {product?.price}</p>
          <button className='bg-indigo-800 text-2xl px-8 rounded-xl text-white py-3' onClick={() => {
            dispatch(addProduct(product))
          }}>Add to Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductDetail



