import { Link } from "react-router-dom"
import Loading from "../Loading/Loading"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ detailProducts, loading }) => {
    //desestructuración de mi objeto
    const { name, id, price, category, img,stock } = detailProducts
    const [quantity, setQuantity] = useState(0)
    //traigo la función addItem
    const { addItem, getProductQuantity } = useContext(CartContext)
    const quantityAdded = getProductQuantity(id)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        //dentro de addItem le agrego mi array de objetos más el contador
        addItem({ name, price, category, img,stock, id, quantity })
    }
    if (loading) {
        return (
            <Loading infoLoad={"Loading..."} />
        )
    }

    return (
            <div className="animationOpacity container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4" style={{ overflow: "hidden" }}> <img src={img} alt="" width="400" /> </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to={"/"} className="d-flex align-items-center text-decoration-none"> <i className="fa fa-long-arrow-left p-1"></i><span>Back</span> </Link>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{category}</span>
                                            <h5 className="text-uppercase">{name}</h5>
                                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">${price}</span>
                                            </div>
                                        </div>
                                        <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta commodi sequi, distinctio nemo autem velit non est et officiis ipsa architecto quibusdam molestias ut! Modi qui voluptatibus, veniam impedit excepturi omnis dolorem, suscipit nesciunt officiis doloribus ex in libero exercitationem, necessitatibus aut dolore ullam consequuntur eaque quaerat odio illum.</p>
                                        {quantity > 0 ? <Link to={"/cart"} className="cart mt-4 align-items-center btn button-item-detail text-uppercase mr-2 px-4">checkout</Link> : <ItemCount stock={detailProducts.stock} onAdd={onAdd} initial={quantityAdded?quantityAdded:detailProducts.initial} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ItemDetail;
















