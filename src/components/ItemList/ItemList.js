import { useState, useEffect } from "react";
import { getProducts, getProductsCategory, getProductsSearch } from "../../asyncMock"
import Loading from "../Loading/Loading"
import Item from "../Item/Item"
import { useParams } from "react-router-dom"
import SubCategory from "../SubCategory/SubCategory"


const ItemList = ({ greeting, onAdd }) => {
    //estado en donde muestro algo mientras se carga mi api
    const [loading, setLoading] = useState()
    //estado en donde guardo mi array de productos(Products)
    const [products, setProducts] = useState([])
    //funcion que me trae todos los parametros de URL
    const params = useParams()

    useEffect(() => {
        // cambia de estado a true para que renderize mi componente loading
        setLoading(true)
        //variable que dependiendo de que params tenga, cambia mi función que retorna la promesa del array
        const functions=params.categoryId?getProductsCategory(params.categoryId):params.searchNameCategory?getProductsSearch(params.searchNameCategory):getProducts()
        //funcion que retorna mi array desde la promesa
         functions.then(response => {
            setProducts(response)
        }).finally(() => {
            //al finalizar el renderizado hago que el componente loading deje de renderizarse
            setLoading(false)
        })
    }, [params.categoryId, params.searchNameCategory])//el [] indica que cuando renderize el return div, recien ahi ejecute el useEffect

    //condicional que renderiza el componente Loading
    if (loading) {
        return (
            <Loading infoLoad={"Loading..."} />)
    }
    //metodo map en mi array para renderizar el componente Item con las propiedades de mi objeto
    const productsTransform = products.map(product => {
        return (
            <Item key={product.id} object={product} />
        )
    })
    //condicional que retorna mis productos. si no hay ningun producto me retorna un mensaje de que no se encontró ese producto
    if (products.length === 0) {
        return (<Loading infoLoad={`We're sorry, the product ${params.searchNameCategory} is not available in our store`} />)
    }
    else {
        return (<><SubCategory />{productsTransform}</>)
    }
}
export default ItemList;



