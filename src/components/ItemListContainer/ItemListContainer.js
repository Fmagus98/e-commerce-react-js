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
        return (
            <>
            {/* <div className="m-2"> */}
             {/* <h5>loading products...</h5>
                <div class="progress">
                    <div className="loading progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>  */}
                <img className="loading" src="./assets/img/aguila.png" alt="aguila"></img>
                <h4 className="loading-text">Loading...</h4>
{/* </div> */}

            </>)
    }
    const productsTransform = products.map(product => {
        return (
            <ItemCount key={product.id} product={product.name} price={product.price} stock={product.stock} initial={product.initial} onAdd={onAdd} image={product.img} />
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
