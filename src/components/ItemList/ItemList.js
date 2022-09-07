
import Loading from "../Loading/Loading"
import Item from "../Item/Item"

import SubCategory from "../SubCategory/SubCategory"


const ItemList = ({ loading, products,searchNameCategory}) => {

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
        return (<Loading infoLoad={`We're sorry, the product ${searchNameCategory} is not available in our store`} />)
    }
    else {
        return (<><SubCategory />{productsTransform}</>)
    }
}
export default ItemList;



