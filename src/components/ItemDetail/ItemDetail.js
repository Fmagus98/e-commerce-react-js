import { Link } from "react-router-dom"
import Loading from "../Loading/Loading"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({detailProducts,loading,itemCount,setItemCount}) => {
   
    if (loading) {
        return (
            <Loading infoLoad={"Loading..."} />
        )
    }

    return (
        <>
            <div className="animationOpacity container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4"> <img src={detailProducts.img} alt="" width="400" /> </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to={"/"} className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span>Back</span> </Link>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{detailProducts.category}</span>
                                            <h5 className="text-uppercase">{detailProducts.name}</h5>
                                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">${detailProducts.price}</span>
                                            </div>
                                        </div>
                                        <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta commodi sequi, distinctio nemo autem velit non est et officiis ipsa architecto quibusdam molestias ut! Modi qui voluptatibus, veniam impedit excepturi omnis dolorem, suscipit nesciunt officiis doloribus ex in libero exercitationem, necessitatibus aut dolore ullam consequuntur eaque quaerat odio illum.</p>
                                        {itemCount?<ItemCount detailProducts={detailProducts} onAdd={()=>setItemCount(false)} />:<Link to={"/cart"} onClick={()=>setItemCount(true)} className="cart mt-4 align-items-center btn button-item-detail text-uppercase mr-2 px-4">checkout</Link>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;
















