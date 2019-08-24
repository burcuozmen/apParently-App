import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/navbar.component";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateBaby from "./components/create-baby.component";
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="container">
          <div className="App">
            
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            
            <Switch>
            
     
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute  path="/list" exact component={ExercisesList} />
              <PrivateRoute  path="/edit/:id" component={EditExercise} />
              <PrivateRoute  path="/create" component={CreateExercise} />
              <PrivateRoute  path="/baby" component={CreateBaby} />
              
            </Switch>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
