import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeBabyname = this.onChangeBabyname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      babyname: '',
      description: '',
      duration: 0,
      date: new Date(),
      babies: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/babies/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            babies: response.data.map(baby => baby.babyname),
            babyname: response.data[0].babyname
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeBabyname(e) {
    this.setState({
      babyname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      babyname: this.state.babyname,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
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
      <h3>Create New Baby Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Babyname: </label>
          <select ref="babyInput"
              required
              className="form-control"
              value={this.state.babyname}
              onChange={this.onChangeBabyname}>
              {
                this.state.babies.map(function(baby) {
                  return <option 
                    key={baby}
                    value={baby}>{baby}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}