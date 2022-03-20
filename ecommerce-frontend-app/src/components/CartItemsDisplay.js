/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCartItems } from "./../actions/productActions";

class CartItemsDisplay extends Component {
  componentDidMount() {
    this.props.getAllCartItems();
  }

  render() {
    const cartItems = this.props.cartItems;
    console.log(cartItems);
    return (
      <div>
        <div className="container">
          <div className="row">
            {cartItems.map((cartItem) => {
              return (
                <div className="col col-lg-3">
                  <div className="card">
                  <img
                  className="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRiVqB-qOQxOt_R3EsMNG266eSyHfGOXmpBR7XbfdfNSj82BRMkULPwdvuZcP698tTFqkvVaVU4ClYcRNGv7WOGA8hH8xsWYKCT4zufP5ialGWJZ6CsHrgj&usqp=CAc"
                  alt="Card image cap"
                />
                    <div className="card-body">
                    <h5 className="card-title">Name: {cartItem.productName}</h5>
                    <p className="card-text">Desc: {cartItem.productDesc}</p>
                    <p className="card-text">Price: <b>{cartItem.productPrice}</b></p>
                      <p></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

CartItemsDisplay.propTypes = {
  getAllCartItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cartItems: state.products.cartItems,
});

export default connect(mapStateToProps, {
  getAllCartItems,
})(CartItemsDisplay);
