import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";

const ItemDetail = () => {
    const [detailProducts, setDetailProducts] = useState({})

    useEffect(() => {
        getProducts().then(response => {
            setDetailProducts(response.find(prod => prod.id === 1))
        })
    }, [])
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
                                                <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div>
                                            </div>
                                            <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{detailProducts.category}</span>
                                                <h5 class="text-uppercase">{detailProducts.name}</h5>
                                                <div class="price d-flex flex-row align-items-center"> <span class="act-price">${detailProducts.price}</span>
                                                </div>
                                            </div>
                                            <p class="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
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
















            