import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from './../actions/productActions';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailID: "",
      password: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors) {
      console.log(nextProps.errors);
      this.setState({
        errors: nextProps.errors,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const emailID = {
        emailID: this.state.emailID,
    };
    this.props.login(
      emailID
    );
  };
  render() {
    const loginUser = this.props.loginUser;
    console.log("loginUser",loginUser);
    return (
      <div className="container">
        <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>email ID</label>
            <input
              type="text"
              className="form-control"
              name="emailID"
              value={this.state.emailID}
              onChange={this.onChange}
              placeholder="enter your emailID"
            />
          </div>
          
          <div className="form-group">
          <label>password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="enter your password"
          />
        </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}


LoginComponent.propTypes = {
  addUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  loginUser:state.products.loginUser
});
export default connect(mapStateToProps, { login })(LoginComponent
  );
