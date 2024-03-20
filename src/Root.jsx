import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header} from './components'
import { ProductProvider } from './contexts/productContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


function Root() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['productData'],
    queryFn: () =>
      axios.get('https://fakestoreapi.com/products').then((res) => {
        return res.data
      }
      )
  });
  
  return (
    <>
        <ProductProvider value={{data, isLoading, isError}}>
          <Header />
          <Outlet />
        </ProductProvider>
    </>
  )
}

export default Root