import { useState, useEffect } from "react";
import { getProducts, getProductsCategory,getProductsSearch } from "../../asyncMock"
import Loading from "../Loading/Loading"
import Item from "../Item/Item"
import { useParams } from "react-router-dom"


const ItemList = ({ greeting, onAdd }) => {
    //estado en donde muestro algo mientras se carga mi api
    const [loading, setLoading] = useState(true)
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
        else if(params.searchNameCategory) {
            getProductsSearch(params.searchNameCategory).then(response => {
                setProducts(response)//guarda mi array de productos
            }).finally(() => {//al finalizar el renderizado hago que mi logo de carga se vaya
                setLoading(false)
            })
        }
        else{
            getProducts().then(response => {
                setProducts(response)//guarda mi array de productos
            }).finally(() => {//al finalizar el renderizado hago que mi logo de carga se vaya
                setLoading(false)
            })
        }
    }, [params.categoryId,params.searchNameCategory])//el [] indica que cuando renderize el return div, recien ahi ejecute el useEffect

    if (loading) {
            return(
            <Loading infoLoad={"Loading..."}/>)
    }
    const productsTransform = products.map(product => {
        return (
            <Item key={product.id} object={product} />
        )
    })
    if(products.length===0){
    return (<Loading infoLoad={`We're sorry, the product ${params.searchNameCategory} is not available in our store`}/>)
    }
    else{
        return (<>{productsTransform}</>)
    }
}
export default ItemList;

















// const [usuarios, setUsuarios]= useState([]);
//   const [tablaUsuarios, setTablaUsuarios]= useState([]);
//   const [busqueda, setBusqueda]= useState("");

// tablaUsuarios esta el array 

// const handleChange=e=>{
//   setBusqueda(e.target.value);
//   filtrar(e.target.value);
// }

// const filtrar=(terminoB+usqueda)=>{
//   var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
//     if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//     || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//     ){
//       return elemento;
//     }
//   });
//   setUsuarios(resultadosBusqueda);
// }

// useEffect(()=>{
// peticionGet();
// },[])

//   return (
//     <div className="App">
//       <div className="containerInput">
//         <input
//           className="form-control inputBuscar"
//           value={busqueda}
//           placeholder="Búsqueda por Nombre o Empresa"
//           onChange={handleChange}
//         />
//         <button className="btn btn-success">
//           <FontAwesomeIcon icon={faSearch}/>
//         </button>
//       </div>
//   );
// }