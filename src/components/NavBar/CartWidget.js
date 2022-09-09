import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"


const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)
    const quantityCart = getQuantity()


    return (
        
            <Link to={"/cart"}className="col-12 col-lg-auto m-auto text-white">
                <i className="fas fa-shopping-cart "></i>
                <p className="d-inline"> {quantityCart}</p>
            </Link>
    )
}

export default CartWidget;
