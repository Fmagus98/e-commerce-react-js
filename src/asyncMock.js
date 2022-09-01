const products=[
    {id:"1", name:"Motherboard Msi A320M-A PRO MAX", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Msi-A320M-A-PRO-MAX.webp"},
    {id:"2", name:"Motherboard Asrock H370M-HDV", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Asrock-H370M-HDV.webp"},
    {id:"3", name:"Motherboard Asrock H610M-HDVM.2", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Asrock-H610M-HDVM.2.webp"},
    {id:"4", name:"Motherboard Asus B365M-A", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Asus-B365M-A.webp"},
    {id:"5", name:"Motherboard Asus P5G41T-MLX3", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Asus-P5G41T-MLX3.webp"},
    {id:"6", name:"Motherboard Asus PRIME 510M-E", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Asus-PRIME-510M-E.webp"},
    {id:"7", name:"Motherboard Asus PRIME B450M-A", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Asus-PRIME-B450M-A.webp"},
    {id:"8", name:"Motherboard Gigabyte A320M-H", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-A320M-H.webp"},
    {id:"9", name:"Motherboard Gigabyte A520M-H", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-A520M-H.webp"},
    {id:"10", name:"Motherboard Gigabyte B450M-DS3H", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-B450M-DS3H.webp"},
    {id:"11",name:"Motherboard Gigabyte B560M", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-B560M.webp"},
    {id:"12", name:"Motherboard Gigabyte H510M-H", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-H510M-H.webp"},
    {id:"13", name:"Motherboard Gigabyte H610M-H", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-H610M-H.webp"},
    {id:"14", name:"Motherboard Gigabyte H610M-SH2", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gigabyte-H610M-SH2.webp"},
    {id:"15", name:"Motherboard Gygabyte H410M-H v3", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Gygabyte-H410M-H-v3.webp"},
    {id:"16", name:"Motherboard Msi H310M PRO-M2 PLUS", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Msi-H310M-PRO-M2-PLUS.webp"},
    {id:"17", name:"Motherboard Msi H410M-B PRO", price:"54000", description:"", category:"Motherboard", stock:"65", initial:1 ,img:"/assets/img/products/Motherboard-Msi-PRO-H410M-B.webp"},
    {id:"18", name:"Nvidia Asus Dual Geforce gtx 1650 4gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Asus-Nvidia-Dual Geforce-gtx-1650-4gb.webp"},
    {id:"19", name:"Nvidia Asus Geforce gtx 1050Ti 4gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Asus-Nvidia-Geforce-gtx-1050Ti-4gb.webp"},
    {id:"20", name:"Nvidia Asus Tuf Gaming Geforce gtx 1650 4gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Asus-Nvidia-Tuf-Gaming-Geforce-gtx-1650-4gb.webp"},
    {id:"21", name:"Nvidia Asus Tuf Gaming-Geforce rtx 3060 12gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Asus-Nvidia-Tuf-Gaming-Geforce-rtx-3060-12gb.webp"},
    {id:"22", name:"Nvidia Gigabyte Geforce gtx 1660 6gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Gigabyte-Nvidia-Geforce-gtx-1660-6gb.webp"},
    {id:"23", name:"Nvidia Gigabyte Geforce gtx 1660 Super 6gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Gigabyte-Nvidia-Geforce-gtx-1660-Super-6gb.webp"},
    {id:"24", name:"Nvidia Igame Geforce rtx 3060Ti 12gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Igame-Nvidia-Geforce-rtx-3060Ti-12gb.webp"},
    {id:"25", name:"Nvidia Msi Geforce gtx 1650 4gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Msi-Nvidia-Geforce-gtx-1650-4gb.webp"},
    {id:"26", name:"Nvidia Msi Geforce gtx 2060 Super 8gb", price:"54000", description:"", category:"GraphicsCard", stock:"65" , initial:1 ,img:"/assets/img/products/Videocard-Msi-Nvidia-Geforce-gtx-2060-Super-8gb.webp"},
    {id:"27", name:"Nvidia Msi Geforce rtx 2060 ventus xs 6gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Msi-Nvidia-Geforce-rtx-2060-ventus-xs-6gb.webp"},
    {id:"28", name:"Nvidia Zotac Gaming Geforce gtx 2060 6gb", price:"54000", description:"", category:"GraphicsCard", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Msi-Nvidia-Geforce-rtx-2060-ventus-xs-6gb.webp"},
    {id:"29", name:"Nvidia Zotac Gaming Geforce gtx 2060 6gb", price:"54000", description:"", category:"MemoryRam", stock:"65", initial:1 ,img:"/assets/img/products/Videocard-Msi-Nvidia-Geforce-rtx-2060-ventus-xs-6gb.webp"},
]
export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(products)
        },2000)
    })
}
export const getProductsId =(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(products.find(product=>product.id===productId))
        },2000)
    })
}

export const getProductsCategory =(productCategory)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(products.filter(product=>product.category===productCategory))
        },2000)
    })
}

export const getProductsSearch =(productSearch)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve(products.filter(product=>product.name.toLowerCase().includes(productSearch.toLowerCase())))
        },2000)
    })
}



