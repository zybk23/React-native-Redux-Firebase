




export const addToCart=({product,quantity})=>{
    //console.log(product);
    return {type:"add_to_cart",payload:{product:product,quantity:quantity}}
};



export const removeFromCart=productId=>{
    return{type:"remove_from_cart",payload:productId}
};

