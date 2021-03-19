// import { Switch } from "react-router"
// import {UserActionTypes} from './user.types';

// const INITIAL_STATE = {
//     currentUser: null
// }


// const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case UserActionTypes.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: action.payload
//             }
           
    
//         default:
//             return state;
//     }
// }

// export default userReducer;


import {CartActionTypes} from './cart.types';

const INITIAL_STATE = {
    hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
           
    
        default:
           return state;
    }
}

export default cartReducer;