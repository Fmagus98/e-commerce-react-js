import { useState, useEffect } from "react";
import { getProducts, getProductsCategory } from "../../asyncMock"
import Loading from "../Loading/Loading"
import Item from "../Item/Item"
import { useParams } from "react-router-dom"


const ItemList = ({ greeting, onAdd }) => {
    //estado en donde muestro algo mientras se carga mi api
    const [loading, setLoading] = useState()
    //estado en donde guardo mi array de productos(Products)
    const [products, setProducts] = useState([])
    //funcion que me trae todos los parametros de URL
    const params = useParams()

    useEffect(() => {
        setLoading(true)
        if (params.categoryId) {
            getProductsCategory(params.categoryId).then(response => {
                setProducts(response)
            }).finally(() => {//al finalizar el renderizado hago que mi logo de carga se vaya
                setLoading(false)
            })
        }
        //cuando la promesa tome los datos, se ejecuta
        else {
            getProducts().then(response => {
                setProducts(response)//guarda mi array de productos
            }).finally(() => {//al finalizar el renderizado hago que mi logo de carga se vaya
                setLoading(false)
            })
        }
    }, [params.categoryId])//el [] indica que cuando renderize el return div, recien ahi ejecute el useEffect

    if (loading) {
        console.log(loading)
        return (
            <Loading />)
    }
    const productsTransform = products.map(product => {
        return (
            <Item key={product.id} object={product} />
        )
    })
    return (<>{productsTransform}</>)
}
export default ItemList;
