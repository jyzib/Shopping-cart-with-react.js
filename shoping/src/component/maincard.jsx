import React from 'react'

const maincard = ({item ,carts,setcarts }) => {
    // console.log(item)
    const handelbtn =(x)=>{
      
      setcarts([...carts,x])
    //   console.log(carts)
    }
    const remove = (y)=>{
        const fil = carts.filter((e)=>{
                 if(e.id !== y.id){
                    return e
                 }
        })
        setcarts(fil)
        //   console.log(y)
        // console.log(carts)
    }
   
    

  return (
    <div className="cards">
    <h2>{item.name}</h2>
    <h3>{item.price}</h3>
    <p>{item.description}</p>
    {carts.includes(item)?  <button onClick={()=>remove(item)} >remove</button>:   <button onClick={()=>handelbtn(item)} >add to cart</button>}
 
   
   </div>
  )
}

export default maincard
