import { useContext, createContext } from "react";


export const ProductContext = createContext({
    data: [],
    isLoading: '',
    isError: ''
})
  

export const useProduct = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ProductContext.Provider
