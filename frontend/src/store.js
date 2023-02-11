import { createStore , combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from './reducers/orderReducer';
import { productReducer , productDetailsReducer} from './reducers/productReducers';
import { authReducer, userReducer } from './reducers/UserReducers';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    auth:authReducer,
    user:userReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
})

const initialState = {
    cart:{
        cartItems:localStorage.getItem('cartitems')
        ?JSON.parse(localStorage.getItem('cartitems'))
        :[],
        shippingAddress: localStorage.getItem("shippingAddress")
        ?JSON.parse(localStorage.getItem("shippingAddress"))
        :{}}

    
}

const middleware = [thunk];
const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;