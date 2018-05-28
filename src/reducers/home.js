import { ACTION_HANDLERS } from '../actions/homeaction'

const initialState = {}
export function HomeReducer(state = initialState, action){
    const handler = ACTION_HANDLERS[action.type]
return handler ? handler(state, action) : state;
}