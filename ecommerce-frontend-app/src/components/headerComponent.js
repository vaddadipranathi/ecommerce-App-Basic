/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderComponent extends React.Component {
  render() {
    const loginUser = this.props.loginUser;
    let button;
    if (loginUser===true) {
      button = (
        <Link to="/allCartItems" className="nav-link">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <b> Cart</b>
        </Link>
      );
    } 
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <a className="navbar-brand">Ecommerce App</a>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/allProducts" className="nav-link">
                    <b> Products</b>
                  </Link>
                </li>
                {button}

                <li className="nav-item">
                  <Link to="/userRegister" className="nav-link">
                    <b> Register</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <b> Login</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginUser: state.products.loginUser,
});

export default connect(mapStateToProps)(HeaderComponent);
