const CartWidget =()=>{
    return(
        <div className="col-12 col-lg-auto justify-content center">
                    <i className="fa-light fa-cart-shopping"></i>
                    <p className="d-inline">{ItemListContainer()}</p>
        </div>
    )
}

export default CartWidget;

const ItemListContainer=()=>{
    return(
        "1"
    )
}