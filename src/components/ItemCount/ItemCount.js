import {useState} from "react"
const ItemCount =({detailProducts, onAdd})=>{
    const [counter, setCounter] = useState(detailProducts.initial);

    const increment = () => {
        if (counter < detailProducts.stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return(<>
        <button className="d-inline btn" onClick={decrement}>-</button>
        <p className="d-inline m-2">{counter}</p>
        <button className="btn" onClick={increment}>+</button>
        <div className="cart mt-4 align-items-center"> <button onClick={()=>onAdd(counter)}className="btn button-item-detail text-uppercase mr-2 px-4">Add to cart</button></div>
        </>
    )
}
export default ItemCount;