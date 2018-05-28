import { combineReducers } from 'redux';
import { HomeReducer as home } from './home';
export const rootReducer = () =>  {
    return combineReducers({
        home
    })
    
};
export default rootReducer;