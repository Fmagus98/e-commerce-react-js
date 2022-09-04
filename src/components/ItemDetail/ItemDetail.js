import { useEffect, useState } from "react";
import { getProductsId } from "../../asyncMock";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Loading from "../Loading/Loading"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = () => {
    const [detailProducts, setDetailProducts] = useState({});
    const [loading, setLoading] = useState()
    const params = useParams()
    const [itemCount, setItemCount] = useState(true)
    useEffect(() => {
        setLoading(true)
        getProductsId(params.productId).then(response => {
            setDetailProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [params.productId])
    if (loading) {
        return (
            <Loading infoLoad={"Loading..."} />
        )
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
                                        <div className="text-center p-4"> <img src={detailProducts.img} alt="" width="400" /> </div>
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
                                        {itemCount?<ItemCount detailProducts={detailProducts} onAdd={()=>setItemCount(false)} />:<Link to={"/cart"} className="cart mt-4 align-items-center btn btn-primary text-uppercase mr-2 px-4">checkout</Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;
















