import ItemList from "../ItemList/ItemList"


const ItemListContainer=({greeting})=>{
    return(
        <>
        <h1>{greeting}</h1>
        <div className="listProducts row w-100">
        <ItemList/>
        </div>
        </>
    )
}
export default ItemListContainer;