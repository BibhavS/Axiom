import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import {Home, Contact, Search, ProductDetail, Products, Cart} from './pages'
import Root from './Root.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const router = createBrowserRouter(createRoutesFromElements(
   <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='products/:productId' element={<ProductDetail/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='cart' element={<Cart/>}/>
   </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={client}>   
     <Provider store={store}>
       <RouterProvider router={router}/>
     </Provider>
     </QueryClientProvider>
  </React.StrictMode>,
)
