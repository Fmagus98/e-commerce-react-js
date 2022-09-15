import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react";
// import { getProducts, getProductsCategory, getProductsSearch } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading";
import { getDocs, collection} from "firebase/firestore"
import { db } from "../../Utils/firebase"



const ItemListContainer = () => {
    //estado en donde muestro algo mientras se carga mi api
    const [loading, setLoading] = useState()
    //estado en donde guardo mi array de productos(Products)
    const [products, setProducts] = useState([])
    //funcion que me trae todos los parametros de URL
    const { categoryId, searchNameCategory } = useParams();

    useEffect(() => {
        // cambia de estado a true para que renderize mi componente loading
        setLoading(true)
        //traigo mis datos desde firebase
        getDocs(collection(db, "products")).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            //variable que depende de useparams para renderizar los productos en mi página
            const functions=categoryId?products.filter(p=>p.category===categoryId):searchNameCategory?products.filter(p=>p.name.toLowerCase().includes(searchNameCategory.toLowerCase())):products
            return(
                setProducts(functions))
        }).finally(() => {
            //al finalizar el renderizado hago que el componente loading deje de renderizarse
            setLoading(false)
        })
    }, [categoryId, searchNameCategory])//el [] indica que cuando renderize el return div, recien ahi ejecute el useEffect
    if (loading) {
        return (
            <Loading infoLoad={"Loading..."} />)
    }
    if (products.length === 0) {
        return (<Loading infoLoad={`We're sorry, the product ${searchNameCategory} is not available in our store`} />)
    }
    else {
        return (
            <>
                <div className="listProducts row">
                    <ItemList loading={loading} searchNameCategory={searchNameCategory} products={products} setLoading={setLoading} />
                </div>
            </>
        )
    }
}
export default ItemListContainer;