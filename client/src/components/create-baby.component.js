import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class CreateBaby extends Component {
  constructor(props) {
    super(props);

    this.onChangeBabyname = this.onChangeBabyname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      babyname: ''
    }
  }

  onChangeBabyname(e) {
    this.setState({
      babyname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const baby = {
      babyname: this.state.babyname
    }

    console.log(baby);

    axios.post('http://localhost:5000/babies/add', baby)
      .then(res => console.log(res.data));

    this.setState({
      babyname: ''
    })
  }

  render() {
    return (
      
      <div>
              <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/dashboard" className="navbar-brand">apParently</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/list" className="nav-link">Baby Log</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create New Log</Link>
        </li>
        <li className="navbar-item">
        <Link to="/baby" className="nav-link">Add Baby</Link>
        </li>
      </ul>
      </div>
    </nav>
        <h3>Create New Baby</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Babyname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.babyname}
                onChange={this.onChangeBabyname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Baby" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}