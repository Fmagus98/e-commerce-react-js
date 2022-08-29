import{Link} from "react-router-dom"


const Item = ({ product,price,image,itemDetailContainer,id }) => {
    return (
        <>
            <div className=" col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                            <img className="image" src={image} alt=""></img>
                        <ul className="product-links">
                            <li><button class="button-itemDetail" onClick={()=>itemDetailContainer}><i className="fa fa-search"></i></button></li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{product}</h6>
                        <div className="price m-2">${price}</div>
                        <Link to={`/detail/${id}`} className="d-block btn btn-primary m-auto ">See product</Link>
                    </div>
                </div>
            </div>
            </>)
                }
            export default Item; 