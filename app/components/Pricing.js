import React, { Component } from 'react';
import Nav from './children/Nav';
import Footer from './children/Footer';

require('./Pricing.css');

export default class Pricing extends Component {
    render() {
      return (
          <div>
              <Nav />
              
              <Nav
              authenticated={this.props.authenticated}
              authenticate={this.props.authenticate}
              deAuthenticate={this.props.deAuthenticate}
              logout={this.props.logout}
              />  
              <section id="plans">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-4 text-center">
                               <div class="panel panel-danger panel-pricing">
                                  <div class="panel-heading">
                                      <i class="fa fa-desktop"></i>
                                      <h3>Plan 1</h3>
                                  </div>
                                  <div class="panel-body text-center">
                                      <p><strong>$100 / Month</strong></p>
                                  </div>
                                  <ul class="list-group text-center">
                                      <li class="list-group-item"><i class="fa fa-check"></i> Personal use</li>
                                      <li class="list-group-item"><i class="fa fa-check"></i> Unlimited projects</li>
                                      <li class="list-group-item"><i class="fa fa-check"></i> 27/7 support</li>
                                  </ul>
                                  <div class="panel-footer">
                                      <a class="btn btn-lg btn-block btn-danger" href="#">BUY NOW!</a>
                                  </div>
                              </div>
                          </div> 
                          
                          
                      </div>
                  </div>
              </section>
              <Footer/>
          </div>
      );
    }
  }
  


  