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
            <div className=" col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="1" className="image">
                            <img src={image} alt=""></img>
                        </a>
                        <ul className="product-links">
                            <li><a href="2"><i className="fa fa-search"></i></a></li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{product}</h6>
                        <div className="price m-2">${price}</div>
                        <button className="d-inline btn" onClick={decrement}>-</button>
                        <p className="d-inline m-2">{counter}</p>
                        <button className="btn" onClick={increment}>+</button>
                        <button type="button" className="d-block btn btn-primary m-auto "onClick={() => (onAdd(counter))}>Add cart</button>
                    </div>
                </div>
            </div>
            </>)
                }
            export default Itemcount; 