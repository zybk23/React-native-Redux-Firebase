
import Order from '../../React/models/order';

const initialState={
    orders:[]
};



export default function orderListReducer(state=initialState,action) {
    switch (action.type) {
        case "add_order":
            const newOrder=new Order(
                new Date().toString(),
                action.payload.items,
                action.payload.amount,
                new Date()
            );

            return {
                ...state,
                orders:state.orders.concat(newOrder)
            };

        default:
            return state

    }
}
