import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import elements from './elem'
import filters from './filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    elements,
    filters,
})

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store