import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {getDoc,doc} from "firebase/firestore";
import {db} from "../../Utils/firebase"
const ItemDetailContainer = ({addItem}) => {
    const [detailProducts, setDetailProducts] = useState({});
    const [loading, setLoading] = useState()
    const params = useParams()
    useEffect(() => {
        setLoading(true)

        getDoc(doc(db,"products", params.productId)).then(response=>{
            const value= response.data()
            const product={id:response.id, ...value}
            setDetailProducts(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [params.productId])
    return (
        <div className="animationOpacity row"><ItemDetail detailProducts={detailProducts} addItem={addItem} loading={loading}/></div>
    )
}
export default ItemDetailContainer;