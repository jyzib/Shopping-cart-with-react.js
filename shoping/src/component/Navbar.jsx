import { useContext, useEffect, useState } from "react"
import { Link ,Outlet} from "react-router-dom"
import { Allcart } from "./contaxt"
import data from "./data"
const Navbar = () => {
   const {alldata,setalldata} = useContext(Allcart)

  const [tottal,settottal]=useState(0)
  const {carts} = useContext(Allcart)
  const [toggle, settoggle] = useState(false)
  const [inputvalue, setinputvalue] = useState('')


console.log(inputvalue)
useEffect(()=>{
  const newvalue = data.filter((e)=>{
    if(e.description.toLowerCase().includes(inputvalue.toLowerCase())  || e.name.toLowerCase().includes(inputvalue.toLowerCase())){
     return e
    }
  })
  
  // console.log(newvalue)
  setalldata(newvalue)
},[inputvalue])

const Cart = carts.map((e)=>{
    return <dir className={'togelcart'} key={e.id} > <p>{e.name}</p> 
     <h3>{e.price}</h3>
     <p>{e.description}</p>
     </dir>
   })
useEffect(()=>{
const tottalamout = carts.reduce((curr,e)=>{
   return curr+ e.price
},0)
settottal(tottalamout)
console.log(tottalamout)
},[carts])
  return (<>
    <div className="navbar" >

       <Link className="logo" to={'/'}> <h2>logo</h2> </Link>
       <form action="">
       <input  onChange={(e)=>setinputvalue(e.target.value)} type="text" placeholder="serch item" />
       </form>
       <div className="cart"><i  onClick={()=>settoggle(!toggle)} className="bi bi-cart-fill">
        </i>
        {toggle &&  <div className="cart-section">
          <p>Tottal amount : {tottal}</p>
          {carts.length==0 ?'empty is empty': <div className="">
          {Cart}
          </div> }
         
          
          
           
        </div>}
        <div className="number">
            <p>{carts.length}</p>
        </div>
        </div>
     
     
    </div>
     <Outlet/>
    </>
   
  )
}

export default Navbar
