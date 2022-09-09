import {useState,useEffect} from "react"
const ItemCount =({detailProducts,initial=detailProducts.initial, onAdd})=>{
    const [quantity, setQuantity] = useState(detailProducts.initial);


    useEffect(() => {
        setQuantity(initial)
   }, [initial])

    const increment = () => {
        if (quantity < detailProducts.stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(<>
        <button className="d-inline btn" onClick={decrement}>-</button>
        <p className="d-inline m-2">{quantity}</p>
        <button className="btn" onClick={increment}>+</button>
        <div className="cart mt-4 align-items-center"> <button onClick={()=>onAdd(quantity)}className="btn button-item-detail text-uppercase mr-2 px-4">Add to cart</button></div>
        </>
    )
}
export default ItemCount;