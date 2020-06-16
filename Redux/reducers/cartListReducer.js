import CartItem from '../../React/models/cartItem';



const initialState={
    items:{},
    totalAmount:0
};


export default function cartListReducer(state=initialState,action) {
    switch (action.type) {
        case "add_to_cart":
            const addedProduct=action.payload;
            const prodPrice=addedProduct.product.price;
            const prodTitle=addedProduct.product.name;


            let updatedOrNewItem;
            //console.log(state.items[addedProduct.product.id])
            if(state.items[addedProduct.product.id]){
                updatedOrNewItem=new CartItem(
                    state.items[addedProduct.product.id].quantity+1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.product.id].sum+prodPrice
                );
            }
            else{
                updatedOrNewItem=new CartItem(1,prodPrice,prodTitle,prodPrice)
            }



            return{
                ...state,
                items:{...state.items,[addedProduct.product.id]:updatedOrNewItem},
                totalAmount: state.totalAmount+prodPrice
            };

        case "remove_from_cart" :
            const selectedCartItem=state.items[action.payload];
            const currentQty=selectedCartItem.quantity;
            let updatedCartItems;
            //console.log(selectedCartItem);
            if(currentQty>1){
                const updatedCartItem=new CartItem(
                    selectedCartItem.quantity-1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum-selectedCartItem.productPrice
                );
                updatedCartItems={...state.items,[action.payload]:updatedCartItem}
            }
            else{
                updatedCartItems={...state.items};
                delete updatedCartItems[action.payload]
            }
            return{
                ...state,
                items:updatedCartItems,
                totalAmount: state.totalAmount-selectedCartItem.productPrice
            };

        case "add_order":
            return initialState;
        default:
            return state
    }
}
