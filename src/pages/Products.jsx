import React from 'react'
import loading from '../assets/loadingIcon.gif'
import ProductCard from '../components/ProductCard';
import { useProduct } from '../contexts/productContext';

function Products() {

  const {data, isLoading, isError} = useProduct();

  if(isLoading){
     return (
      <div className='flex justify-center'>
        <img src={loading} className="gif mt-6" alt="loading"/>
       </div>
     )
  }  
  
  if(isError) return (
    <h1 className='text-3xl font-semibold text-center text-indigo-900 mt-16'>Some error occured while fetching products</h1>
  )

  return (
     <>
      <h1 className='text-center text-indigo-900 lg:text-4xl text-3xl mt-12 font-medium'>Check our Products</h1>
      <div className='mt-8'>
        <div className='grid lg:grid-cols-3 grid-cols-2'>
            {data.map((product) => {
              return (
                <ProductCard key={product.id} product={product}/>
              )
            })}
        </div>
      </div>
     </>
  )
}

export default Products