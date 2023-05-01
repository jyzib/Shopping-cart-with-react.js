import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Cartbody from './component/cartbody'
import Navbar from './component/Navbar'
import Cart from './component/cart'
// import { useState } from 'react'
function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
       <Route path='/'  element={ <Navbar  />}>
       <Route index element={<Cartbody  />} />
      <Route path='/cart' element={<Cart/>} />
       </Route>
      
      
     
   </Routes>
    </BrowserRouter>
         

  
    </>
  )
}

export default App
