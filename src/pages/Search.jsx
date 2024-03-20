import React, { useState } from 'react'
import { useProduct } from '../contexts/productContext'
import { FaSearch } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

function Search() {
  const {data} = useProduct();

  const [input, setInput] = useState('');

  const filteredProducts = data?.filter(item => (item.title.toLowerCase()).includes(input.toLowerCase()) && (input.trim()).length != 0)

  return (
     <> 
      <div className='flex justify-center font-medium mt-8'>
         <form onSubmit = {(e) => e.preventDefault()} className='flex gap-3 items-center'>
             <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
             className='w-[35rem] text-xl outline-none border-b-[3px] border-indigo-900 px-2 py-2' placeholder='Search for Products...'/>
             <FaSearch size={30} color='#312e81'/>
         </form>
      </div>
      <div className='mt-10'>
         {input.length != 0 ? (
           <h3 className='ml-12 text-2xl font-medium'>{filteredProducts?.length} Results Found:</h3>
         ) : null}
         <div className='grid grid-cols-3'>
            {filteredProducts?.map(product => (
              <ProductCard product={product} key={product.id}/>
            ))}
         </div>
      </div>
     </>
  )
}

export default Search