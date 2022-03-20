import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HeaderComponent from "./components/headerComponent";
import store from "./store";
import DisplayAllProducts from "./components/DisplayAllProducts";
import CartItemsDisplay from "./components/CartItemsDisplay"
import UserRegistration from './components/userRegistration';
import LoginComponent from './components/login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent />
        <Route exact path="/allProducts" component={DisplayAllProducts} />
        <Route exact path="/allCartItems" component={CartItemsDisplay} />
        <Route exact path="/userRegister" component={UserRegistration} />
        <Route exact path="/login" component={LoginComponent} />
        
      </Router>
    </Provider>
  );
}

export default App;
