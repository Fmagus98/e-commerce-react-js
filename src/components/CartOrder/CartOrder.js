import {Link} from "react-router-dom"
const CartOrder = ({ order }) => {
  return (<div className="order">
      <img className="orderImg" src="/assets/img/aguila.jpg" alt="" width="100" role="img"/>
    <h2>thanks for buy!!</h2>
    <p>your order is {order}</p>
    <Link to={"/"}className="btn btn-block " style={{ backgroundColor: "#2696be", border: "1px solid white", color: "white" }}>go to home</Link>
  </div>
  )
}
export default CartOrder