import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
	
	cityListReducer,
	notificationReducer,
	pincodeMasterReducer,
	getCitiesPincodeMaster,
	getUpdateHistoryPincodeMaster,
	loaderReducer
} from '../redux/reducers/index';

const reducer = combineReducers({
	cities: cityListReducer,
	notification: notificationReducer,
	pincodeList:pincodeMasterReducer,
	pincodeActiveCities:getCitiesPincodeMaster,
	pincodeUpdateHistory:getUpdateHistoryPincodeMaster,
	loader: loaderReducer,
});

const middleWares = [thunkMiddleware];

// Redux dev tools setup
let enhancer;
const middleWareEnhancer = applyMiddleware(...middleWares);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (
	process.env.NODE_ENV !== 'production' &&
	window.location.hostname === 'localhost' &&
	typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
) {
	enhancer = composeEnhancers(middleWareEnhancer);
} else {
	enhancer = middleWareEnhancer;
}

const store = createStore(reducer, enhancer);

export default store;
