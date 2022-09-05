import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { getProductsId } from "../../asyncMock";
import { useParams } from "react-router-dom"
const ItemDetailContainer = ({addItem}) => {
    const [detailProducts, setDetailProducts] = useState({});
    const [loading, setLoading] = useState()
    const params = useParams()
    const [itemCount, setItemCount] = useState(true)
    useEffect(() => {
        setLoading(true)
        getProductsId(params.productId).then(response => {
            setDetailProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [params.productId])
    return (
        <div className="animationOpacity row w-100"><ItemDetail detailProducts={detailProducts} addItem={addItem} loading={loading} itemCount={itemCount} setItemCount={setItemCount}/></div>
    )
}
export default ItemDetailContainer;