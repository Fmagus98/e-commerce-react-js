import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { getProductsId } from "../../asyncMock";
import { useParams } from "react-router-dom"
const ItemDetailContainer = ({addItem}) => {
    const [detailProducts, setDetailProducts] = useState({});
    const [loading, setLoading] = useState()
    const params = useParams()
    useEffect(() => {
        setLoading(true)
        getProductsId(params.productId).then(response => {
            setDetailProducts(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [params.productId])
    return (
        <div className="animationOpacity row"><ItemDetail detailProducts={detailProducts} addItem={addItem} loading={loading}/></div>
    )
}
export default ItemDetailContainer;