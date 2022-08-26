import { useState } from 'react'

const Itemcount = ({ stock, initial, onAdd, product,price,image }) => {

    const [counter, setCounter] = useState(initial)
    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="1" className="image">
                            <img src={image} alt=""></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="2"><i className="fa fa-search"></i></a></li>
                        </ul>
                        <button onClick={decrement}>-</button>
                        <p>{counter}</p>
                        <button onClick={increment}>+</button>
                        <button onClick={() => (onAdd(counter))}>Add cart</button>
                    </div>
                    <div className="product-content">
                        <h3 className="title"><a href="6">{product}</a></h3>
                        <div className="price">{price}</div>
                    </div>
                </div>
            </div>
            </>)
                }
            export default Itemcount; 