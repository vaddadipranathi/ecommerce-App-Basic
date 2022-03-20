/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import {
  getAllProducts,
  addProductIntoCart,
} from "./../actions/productActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class DisplayAllProducts extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  onSubmit = (id) => {
    this.props.addProductIntoCart(id, this.props.history);
  };

  render() {
    const products = this.props.products.products;
    console.log("from products : ", products);
    return (
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col col-lg-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRiVqB-qOQxOt_R3EsMNG266eSyHfGOXmpBR7XbfdfNSj82BRMkULPwdvuZcP698tTFqkvVaVU4ClYcRNGv7WOGA8hH8xsWYKCT4zufP5ialGWJZ6CsHrgj&usqp=CAc"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">{product.productDesc}</p>
                    <p className="card-text">{product.productPrice}</p>
                    <button
                      onClick={this.onSubmit.bind(this, product.id)}
                      class="btn btn-primary"
                    >
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add
                      To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

DisplayAllProducts.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  getAllProducts,
  addProductIntoCart,
})(DisplayAllProducts);
