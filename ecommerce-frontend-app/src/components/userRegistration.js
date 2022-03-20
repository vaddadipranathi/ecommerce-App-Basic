import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addUser } from "../actions/productActions";



class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailID: "",
      phoneNo: "",
      address: "",
      gender: "",
      errors: {},
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
    const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailID: this.state.emailID,
        phoneNo: this.state.phoneNo,
        address: this.state.address,
        gender: this.state.gender,
    };
    this.props.addUser(
      user
    );
  };

  render() {
    return (
      <div className="container">
        <form className="container" onSubmit={this.onSubmit}>
          <div className="form-group " >
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onChange}
              placeholder="enter your firstName"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onChange}
              placeholder="enter your lastName"
            />
          </div>
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
            <label>phoneNo</label>
            <input
              type="text"
              className="form-control"
              name="phoneNo"
              value={this.state.phoneNo}
              onChange={this.onChange}
              placeholder="enter your phoneNo"
            />
          </div>
          <div className="form-group">
            <label>address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
              placeholder="enter your address"
            />
          </div>
          <div className="form-group">
            <label>gender</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              value={this.state.gender}
              onChange={this.onChange}
              placeholder="enter your gender"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}


UserRegistration.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    errors: state.errors,
  });
  export default connect(mapStateToProps, { addUser })(UserRegistration);
  

