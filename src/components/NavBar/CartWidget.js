const CartWidget =({counter})=>{


    return(
        <div className="col-12 col-lg-auto justify-content center">
                    <i className="fa-light fa-cart-shopping"></i>
                    <p className="d-inline">{counter}</p>
        </div>
    )
}

export default CartWidget;
