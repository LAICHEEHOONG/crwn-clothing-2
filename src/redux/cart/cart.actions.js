// import {UserActionTypes} from './user.types';

// export const setCurrentUser = user => {
//     return (
//         {
//             type: UserActionTypes.SET_CURRENT_USER,
//             payload: user
//         }
//     )
// }

import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});