import { useState } from 'react'

const Itemcount = ({stock,initial,onAdd,product}) => {

    const[counter,setCounter]=useState(initial)
    const increment=()=>{
        if(counter<stock){
        setCounter(counter+1)
        }
    }
  
    const decrement=()=>{
        if(counter>0){
       setCounter(counter-1)
        }
    }

    return (
        <div>
            <h2>{product}</h2>
            <p>{counter}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={()=>(onAdd(counter))}>Add cart</button>
        </div>
    )
}
export default Itemcount;
