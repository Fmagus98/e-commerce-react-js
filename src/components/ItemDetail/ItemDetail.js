import { useEffect, useState } from "react";
import { getProductsId } from "../../asyncMock";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import Loading from "../Loading/Loading"

const ItemDetail = () => {
    const [detailProducts, setDetailProducts] = useState({});
    const [counter, setCounter]=useState(1);
    const [loading,setLoading]=useState(true)
const params =useParams()
    useEffect(() => {
        getProductsId(params.productId).then(response => {
            setDetailProducts(response)
        }).finally(()=>{
            setLoading(false)
        })
    },)
    if(loading){
        return(
            <Loading/>
        )
    }
    const increment = () => {
        if (counter < detailProducts.stock) {
            setCounter(counter + 1)
            console.log(detailProducts.initial)
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4"> <img src={detailProducts.img}  alt=""width="400" /> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product p-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link to={"/"} className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </Link>
                                            </div>
                                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{detailProducts.category}</span>
                                                <h5 className="text-uppercase">{detailProducts.name}</h5>
                                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">${detailProducts.price}</span>
                                                </div>
                                            </div>
                                            <p className="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                            <button className="d-inline btn" onClick={decrement}>-</button>
                        <p className="d-inline m-2">{counter}</p>
                        <button className="btn" onClick={increment}>+</button>
                                            <div className="cart mt-4 align-items-center"> <button className="btn btn-primary text-uppercase mr-2 px-4">Add to cart</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</>
                )}
            export default ItemDetail;
















            