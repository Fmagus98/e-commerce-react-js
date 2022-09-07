import { useContext} from "react"
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

    const {getQuantity}=useContext(CartContext)



    return (
        <div className="col-12 col-lg-auto m-auto text-white">
            <i className="fas fa-shopping-cart "></i>
            <p className="d-inline">{getQuantity()}</p>
        </div>
    )
}

export default CartWidget;
