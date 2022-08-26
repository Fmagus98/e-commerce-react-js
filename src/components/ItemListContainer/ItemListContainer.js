import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({ greeting, onAdd }) => {
    //estado en donde muestro algo mientras se carga mi api
    const [loading, setLoading] = useState(true)
    //estado en donde guardo mi array de productos(Products)
    const [products, setProducts] = useState([])
    useEffect(() => {
        //cuando la promesa tome los datos, se ejecuta
        getProducts().then(response => {
            setProducts(response)//guarda mi array de productos
        }).finally(() => {//al finalizar el renderizado hago que mi logo de carga se vaya
            setLoading(false)
        })
    }, [])//el [] indica que cuando renderize el return div, recien ahi ejecute el useEffect
    if (loading) {
        return <h1>loading products...</h1>
    }
    const productsTransform = products.map(product => {
        return (
            <ItemCount key={product.id} product={product.name} price={product.price} stock={product.stock} initial={product.initial} onAdd={onAdd} image={product.img} />
        )
    })
    return (
        <>
            <h1>{greeting}</h1>
            <div className="row">
                {productsTransform}
            </div>
        </>
    )
}
export default ItemListContainer;
