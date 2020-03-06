import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    {cartItems[0].name}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({cart: { hidden,  cartItems} }) => ({
  hidden,
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);