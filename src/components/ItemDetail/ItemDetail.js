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
            <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <div className="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4"> <img src={detailProducts.img}  alt=""width="400" /> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div className="product" class="p-4">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <Link to={"/"} class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </Link>
                                            </div>
                                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{detailProducts.category}</span>
                                                <h5 class="text-uppercase">{detailProducts.name}</h5>
                                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">${detailProducts.price}</span>
                                                </div>
                                            </div>
                                            <p class="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                            <button className="d-inline btn" onClick={decrement}>-</button>
                        <p className="d-inline m-2">{counter}</p>
                        <button className="btn" onClick={increment}>+</button>
                                            <div class="cart mt-4 align-items-center"> <button class="btn btn-primary text-uppercase mr-2 px-4">Add to cart</button></div>
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
















            