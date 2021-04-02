import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import {selectCartItems} from '../../redux/cart/cart.selectors';
// import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';



import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem: { imageUrl, price, name, quantity }}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>


    </div>
);

// const mapStateToProps = createStructuredSelector({
//     cartItem: selectCartItems
// })

export default CheckoutItem;