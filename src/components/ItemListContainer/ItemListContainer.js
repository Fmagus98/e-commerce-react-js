import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react";
import { getProducts, getProductsCategory, getProductsSearch } from "../../asyncMock"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
        //estado en donde muestro algo mientras se carga mi api
        const [loading, setLoading] = useState()
        //estado en donde guardo mi array de productos(Products)
        const [products, setProducts] = useState([])
        //funcion que me trae todos los parametros de URL
        const {categoryId,searchNameCategory}= useParams();
    
        useEffect(() => {
            // cambia de estado a true para que renderize mi componente loading
            setLoading(true)
            //variable que dependiendo de que params tenga, cambia mi función que retorna la promesa del array
            const functions=categoryId?getProductsCategory(categoryId):searchNameCategory?getProductsSearch(searchNameCategory):getProducts()
            //funcion que retorna mi array desde la promesa
             functions.then(response => {
                setProducts(response)
            }).finally(() => {
                //al finalizar el renderizado hago que el componente loading deje de renderizarse
                setLoading(false)
            })
        }, [categoryId,searchNameCategory])//el [] indica que cuando renderize el return div, recien ahi ejecute el useEffect
    
    return (
        <>
            <div className="listProducts row w-100">
                <ItemList loading={loading} searchNameCategory={searchNameCategory} products={products}/>
            </div>
        </>
    )
}
export default ItemListContainer;