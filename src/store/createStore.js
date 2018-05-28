import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { createLogger } from 'redux-logger';

const log = createLogger({diff: true, collapsed: true});

//an action that create store
export default (initialState = {}) =>  {
    
    //Middleware Configuration
    const middleware = [thunk, log]

    //Store enhancers
    const enhancers = []

    //store installation
    const store = createStore(
        rootReducer(),
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    )
    return store;
};
