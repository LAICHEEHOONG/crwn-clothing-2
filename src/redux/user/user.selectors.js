// import { createSelector } from 'reselect';

// const selectCart = state => {
//     return state.cart
// };

// export const selectCartItems = createSelector(
//     [selectCart],
//     cart => {
//         return cart.cartItems
//     }
// );

// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems =>  
//     cartItems.reduce((accumalatedQuantity, cartItem) => 
//     accumalatedQuantity + cartItem.quantity, 0)
// );

import { createSelector } from 'reselect';

const selectUser = state => state.user;



export const selectCurrentUser = createSelector(
    [selectUser],
    user => {
        return user.currentUser
    }
);

