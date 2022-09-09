import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import {Link} from "react-router-dom"
const Cart = () => {
  const { cart,clearCart} = useContext(CartContext)

  const cartItems = cart.map(p => <CartItem key={p.id} prod={p} />)

  return (
        <section className="w-100 p-4" style={{backgroundColor: "#eee",borderRadius: ".5rem .5rem 0 0"}}>
  
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">

                  <div className="row">

                    <div className="col-lg-7">
                      <Link to={"/"} className="mb-3 text-decoration-none"><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link>
                      <hr></hr>

                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">You have {cart.length} items in your cart</p>
                          </div>
                          <div>
                            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                          </div>
                        </div>
                        {cartItems}
                        <hr></hr>
                       {cart.length>0 ?<button onClick={()=>clearCart()} className="btn btn-danger">Remove all items</button>:null}
                    </div>
                    <div className="col-lg-5">
                      <div className="card text-white rounded-3" style={{backgroundColor: "#2696be",}}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img src="/assets/img/aguila.jpg" className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"></img>
                          </div>

                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" siez="17" placeholder="Cardholder's Name"></input>
                                <label className="form-label" htmlFor="typeName" style={{marginLeft: "0px"}}>Cardholder's Name</label>
                                <div className="form-notch"><div className="form-notch-leading" style={{width: "9px"}}></div><div className="form-notch-middle" style={{width: "116px"}}></div><div className="form-notch-trailing"></div></div></div>

                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeTextCard" className="form-control form-control-lg" siez="17" placeholder="1234 5678 9012 3457" minLength="19" maxLength="19"></input>
                                <label className="form-label" htmlFor="typeText" style={{marginLeft: "0px"}}>Card Number</label>
                                <div className="form-notch"><div className="form-notch-leading" style={{width: "9px"}}></div><div className="form-notch-middle" style={{width: "83.2px"}}></div><div className="form-notch-trailing"></div></div></div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" size="7" minLength="7" maxLength="7"></input>
                                    <label className="form-label" htmlFor="typeExp" style={{marginLeft: "0px"}}>Expiration</label>
                                    <div className="form-notch"><div className="form-notch-leading" style={{width: "9px"}}></div><div className="form-notch-middle" style={{width: "64.8px"}}></div><div className="form-notch-trailing"></div></div></div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="password" id="typeTextPassword" className="form-control form-control-lg" placeholder="●●●" size="1" minLength="3" maxLength="3"/>
                                    <label className="form-label" htmlFor="typeText" style={{marginLeft: "0px"}}>Cvv</label>
                                    <div className="form-notch"><div className="form-notch-leading" style={{width: "9px"}}></div><div className="form-notch-middle" style={{width: "28.8px"}}></div><div className="form-notch-trailing"></div></div></div>
                              </div>
                            </div>

                          </form>

                          <hr className="my-4"/>
                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total</p>
                              <p className="mb-2">$4818.00</p>
                            </div>

                            <button type="button" className="btn btn-block btn-lg" style={{backgroundColor:"rgb(238, 238, 238)"}}>
                              <div className="d-flex justify-content-between">
                                <span>$4818.00</span>
                                <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                              </div>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}
      export default Cart;