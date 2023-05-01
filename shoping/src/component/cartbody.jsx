// import React from 'react'
import data from "./data"
import { useContext, useState } from "react"
import Maincard from "./maincard"
import { Allcart } from "./contaxt"
const Cartbody = ({}) => {
   const {carts,setcarts,alldata} = useContext(Allcart)
// console.log(data)
// console.log(alldata)

  return (
    <div className='card'> 
         {alldata.map((e)=>{
         return (
            <Maincard key={e.id} item={e} carts={carts} setcarts={setcarts} />
        
         )

         })}
    </div>
  )
}

export default Cartbody
