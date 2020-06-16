import {combineReducers} from 'redux';
import categoryListReducer from './categoryListReducer';
import imageListReducer from './imageListReducer';
import bookListReducer from './bookListReducer';
import cartListReducer from './cartListReducer';
import userCreateReducer from './userCreateReducer';
import loginReducer from './loginReducer';
import authorListReducer from './authorListReducer';
import filterListReducer from './filterListReducer';
import orderListReducer from './orderListReducer';




const rootReducer=combineReducers({
    categoryListReducer,
    imageListReducer,
    bookListReducer,
    cartListReducer,
    userCreateReducer,
    loginReducer,
    authorListReducer,
    filterListReducer,
    orderListReducer
});

export default rootReducer
