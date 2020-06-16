

export const addOrder=(cartItems,totalAmount)=>{
    return {type:"add_order",payload:{items:cartItems,amount:totalAmount}}
};
