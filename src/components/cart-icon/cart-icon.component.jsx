import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);


// const mapStateToProps = state => ({
//     hidden: state.cart.hidden
// })

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     setCurrentUser: user => dispatch(setCurrentUser(user))
//   });
  
  
//   export default connect(mapStateToProps, mapDispatchToProps)(App);