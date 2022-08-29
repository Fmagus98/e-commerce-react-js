import { useState, useEffect } from "react";
import { getProducts} from "../../asyncMock"
import Loading from "../Loading/Loading"
import Item from "../Item/Item"


const ItemListContainer = ({ greeting, onAdd }) => {
    //estado en donde muestro algo mientras se carga mi api
    const [loading, setLoading] = useState(true)
    //estado en donde guardo mi array de productos(Products)
    const [products, setProducts] = useState([])
    //funcion que me trae todos los parametros de URL
    useEffect(() => {
        //cuando la promesa tome los datos, se ejecuta
        getProducts().then(response => {
            setProducts(response)//guarda mi array de productos
        }).finally(() => {//al finalizar el renderizado hago que mi logo de carga se vaya
            setLoading(false)
        })
    }, [])//el [] indica que cuando renderize el return div00, recien ahi ejecute el useEffect
    if (loading) {
        return (
            <Loading/>)
    }
    const productsTransform = products.map(product => {
        return (
            <Item key={product.id} id={product.id} product={product.name} price={product.price} onAdd={onAdd} image={product.img} />
        )
    })
    return (
        <>
            <h1>{greeting}</h1>
            <div className="listProducts row w-100">
                {productsTransform}
            </div>
        </>
    )
}
export default ItemListContainer;
