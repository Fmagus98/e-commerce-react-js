const CartWidget = ({ counter }) => {
    return (
        <div className="col-12 col-lg-auto m-auto text-white">
            <i className="fas fa-shopping-cart "></i>
            <p className="d-inline"> {counter}</p>
        </div>
    )
}

export default CartWidget;
