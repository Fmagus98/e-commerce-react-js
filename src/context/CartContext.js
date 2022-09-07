import { createContext, useState } from "react"
export const CartContext=createContext()


 export const CartContextProvider=({children})=>{

    const[cart,setCart]=useState([])

    const addItem=(productToAdd)=>{
        if(isInCart){
        setCart([...cart,productToAdd])
        }
        else{
            const cartUpdated= cart.map(prod=>{
                if(prod.id===productToAdd.id){
                    const productUpdated ={
                        ...prod,
                        quantity:productToAdd.quantity
                    }
                    return productUpdated
                }
                else{
                    return prod
                }
            })
            setCart(cartUpdated)

        }
    }

    const getQuantity =()=>{
        let accu=0
        cart.forEach(prod=>{
            accu+=prod.quantity
        })
        return accu
    }
    const isInCart=(id)=>{
       return cart.some(prod=> prod.id===id)
    }

    const removeItem=(id)=>{
    const cartWithoutItem=cart.filter(prod=>prod.id!==id)
    setCart(cartWithoutItem)
    }
    const clearCart=()=>{
        setCart([]) 
    }
    return(
        <CartContext.Provider value={{cart,addItem,isInCart,removeItem,getQuantity,clearCart}}>
            {children}
        </CartContext.Provider>
    )

}