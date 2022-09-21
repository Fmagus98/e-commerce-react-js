import { Link } from "react-router-dom"


const Item = ({ object }) => {
    return (
        <>
          {object.stock===0?null:<div className="animationOpacity col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <img className="image" src={object.img} alt=""></img>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{object.name}</h6>
                        <div className="price m-2">${object.price}</div>
                        <Link to={`/detail/${object.id}`} className="button-item-detail d-block btn m-auto ">See product</Link>       
                    </div>
                </div>
            </div>
}
        </>)
}

export default Item; 