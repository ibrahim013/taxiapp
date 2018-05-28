import update from 'react-addons-update';
import constants from '../modules/constant';

const { SET_NAME } = constants

export const setName = () =>  {
    return{
        type: SET_NAME,
        payload: 'ibrahim'
    }
};
export const handleSetName = (state, action) =>  {
    return update(state,{
        name:{
            $set: action.payload
        }
    })
    
};

export const ACTION_HANDLERS = {
    SET_NAME: handleSetName
}