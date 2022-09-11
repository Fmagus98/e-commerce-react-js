import CartContext from "../../context/CartContext"
import { useContext } from "react"
import {Link} from "react-router-dom"
const CartItem = ({prod}) => {

  const {removeItem}=useContext(CartContext)

    return (    
          <div className="card mb-3 mb-lg-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <Link to={`/detail/${prod.id}`} className="text-decoration-none" style={{color:"#2696be"}}>
                          <div>
                            <img src={prod.img} className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}></img>
                          </div>
                          <div className="ms-3">
                            <h5>{prod.name}</h5>
                            <p className="small mb-0">Category: {prod.category}</p>
                          </div>
                          </Link>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{width: "150px"}}>
                            <h5 className="fw-normal mb-0 ">amount: {prod.quantity}</h5>
                          </div>
                          <div style={{width: "80px"}}>
                            <h5 className="mb-0">${prod.price*prod.quantity}</h5>
                          </div>
                          <a href="#!" onClick={()=>removeItem(prod.id)}style={{color: "#2696be"}}><i className="fas fa-trash-alt"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}

export default CartItem