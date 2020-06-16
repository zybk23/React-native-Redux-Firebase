import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import Thunk from "redux-thunk"
import rootReducer from './index';

export default function configureStore() {
    return createStore(rootReducer,applyMiddleware(Thunk))
}
