import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import CartOrder from "../CartOrder/CartOrder"
import { Link } from "react-router-dom"
import { db } from "../../Utils/firebase"
import { addDoc, collection, Timestamp, getDocs, where, query, documentId, writeBatch } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)
  const [messageOrder, setMessageOrder] = useState(false)
  //lista de productos agreagdos al carrito
  const cartItems = cart.map(p => <CartItem key={p.id} prod={p} />)
  //precio total inicial del carrito      
  let totalProducts = 0
  //precio total del carrito
  if (cart.length > 0) {
    const priceProducts = cart.map(p => p.price * p.quantity)
    totalProducts = priceProducts.reduce((a, b) => a + b)
  }
  else {
    totalProducts = 0
  }
  const outStock = []
  const createOrder = (e) => {
    e.preventDefault()
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.cardName.value !== "" && e.target.phone.value !== "" && e.target.email.value !== "" && !regexEmail.test(e.target.email.value)) {
      const buyer = {
        buyer: {
          name: e.target.cardName.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
        },
        items: cart,
        total: totalProducts,
        date: Timestamp.fromDate(new Date()),
        status: "in progress.."
      }
      const batch = writeBatch(db)
      const productsId = cart.map(p => p.id)
      getDocs(query(collection(db, "products"), where(documentId(), "in", productsId))).then(response => {
        const { docs } = response
        docs.forEach(doc => {
          const dataDoc = doc.data()
          const stockDb = dataDoc.stock
          const productAdded = cart.find(prod => prod.id === doc.id)
          const prodQuantity = productAdded?.quantity
          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity })
            clearCart()
          }
          else {
            outStock.push({ id: doc.id, ...dataDoc })
          }
        })
        if (outStock.length === 0) {
          addDoc(collection(db, "orders"), buyer).then(response =>
            setMessageOrder(response.id)
          )
          batch.commit()
        }
        else {
          outStock.map(p => toast.info(`sorry, the product ${p.name} is out of stock`, {
            icon: false,
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }))
        }
      })
    }
    else {
      toast.info(`complete the form please`, {
        icon: false,
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  if (messageOrder) {
    return (<CartOrder order={messageOrder} />)
  }

  return (
    <section className="w-100 p-4" style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-7">
                  <Link to={"/"} className="mb-3 text-decoration-none" style={{ color: "#2696be" }}><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</Link>
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
                  {cart.length > 0 ? <button onClick={() => clearCart()} className="btn btn-danger">Remove all items</button> : null}
                  <hr></hr>
                </div>
                <div className="col-lg-5">
                  <div className="card text-white rounded-3" style={{ backgroundColor: "#2696be", }}>
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Card details</h5>
                        <img src="/assets/img/aguila.jpg" style={{ width: "45px" }} alt="Avatar"></img>
                      </div>
                      <p className="small mb-2">Card type</p>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2"></i></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2"></i></a>
                      <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
                      <form onSubmit={createOrder} className="mt-4">
                        <div className="form-outline form-white mb-4">
                          <div className="form-outline form-white mb-4">
                            <input type="text" name="cardName" id="typeName" className="form-control form-control-lg" siez="17" placeholder="Cardholder's Name"></input>
                            <label className="form-label" htmlFor="typeName" style={{ marginLeft: "0px" }}>Cardholder's Name</label>
                            <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "116px" }}></div><div className="form-notch-trailing"></div></div></div>
                          <div className="form-outline form-white mb-4">
                            <input type="text" id="typeTextCard" name="cardNumber" className="form-control form-control-lg" siez="17" placeholder="1234 5678 9012 3457" minLength="19" maxLength="19"></input>
                            <label className="form-label" htmlFor="typeText" style={{ marginLeft: "0px" }}>Card Number</label>
                            <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "83.2px" }}></div><div className="form-notch-trailing"></div></div></div>
                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="text" id="typeExp" name="cardExpiration" className="form-control form-control-lg" placeholder="MM/YYYY" size="7" minLength="7" maxLength="7"></input>
                                <label className="form-label" htmlFor="typeExp" style={{ marginLeft: "0px" }}>Expiration</label>
                                <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "64.8px" }}></div><div className="form-notch-trailing"></div></div></div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input type="password" id="typeTextPassword" name="CardCvv" className="form-control form-control-lg" placeholder="●●●" size="1" minLength="3" maxLength="3" />
                                <label className="form-label" htmlFor="typeText" style={{ marginLeft: "0px" }}>Cvv</label>
                                <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "28.8px" }}></div><div className="form-notch-trailing"></div></div></div>
                            </div>
                          </div>
                          <input type="text" name="email" id="typeName" className="form-control form-control-lg" siez="17" placeholder="Cardholder's Name"></input>
                          <label className="form-label" htmlFor="typeName" style={{ marginLeft: "0px" }}>Email</label>
                          <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "116px" }}></div><div className="form-notch-trailing"></div></div></div>
                        <div className="form-outline form-white mb-4">
                          <input type="tel" name="phone" id="typeName" className="form-control form-control-lg" siez="17" placeholder="Cardholder's Name"></input>
                          <label className="form-label" htmlFor="typeName" style={{ marginLeft: "0px" }}>Phone</label>
                          <div className="form-notch"><div className="form-notch-leading" style={{ width: "9px" }}></div><div className="form-notch-middle" style={{ width: "116px" }}></div><div className="form-notch-trailing"></div></div></div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total</p>
                          <p className="mb-2">${totalProducts}</p>
                        </div>
                        {cart.length > 0 ?
                          <button type="submit" className="btn btn-block " style={{ backgroundColor: "#2696be", border: "1px solid white", color: "white" }}>
                            <div className="d-flex justify-content-between">
                              <span>${totalProducts}<span> Checkout<i className="fas fa-long-arrow-alt-right ms-2"></i></span></span>
                            </div>
                          </button>
                          : null
                        }
                      </form>
                      <ToastContainer />
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
