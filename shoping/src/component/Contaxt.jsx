import React from 'react'
import { createContext,useState } from 'react'
import data from './data'
export const Allcart = createContext()

const Contaxt = ({children}) => {
    const [carts,setcarts] = useState([])
    const [alldata,setalldata] = useState(data)

   return ( 
   <Allcart.Provider value={{carts,setcarts,alldata,setalldata}} >
    {children}
   </Allcart.Provider>
    )
}

export default Contaxt
