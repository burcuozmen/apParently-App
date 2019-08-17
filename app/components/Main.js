// Include React
import React, { Component } from 'react';
import Nav from './children/Nav';
import Footer from './children/Footer';


require('./main.css');

// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");
// var History = require("./children/History");

// // Helper for making AJAX requests to our API
// var helpers = require("./utils/helpers");

// Creating the Main component
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav
          authenticated={this.props.authenticated}
          authenticate={this.props.authenticate}
          deAuthenticate={this.props.deAuthenticate}
          logout={this.props.logout}
        />   
        <header className="intro">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h4 className="brand-heading">apParently</h4>
                            <h3 className="intro-text">Track your Newborn</h3>
                            <ul className="positives_list">
                                <p>Sign up for free to </p>
                                <p>Track your babies Sleep.</p>
                                <p>Track your babies Food</p> 
                                <p>Track your babies Poop</p>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>

  

   
        <Footer/>
     
        
        </div>
      
    );
  }
}
