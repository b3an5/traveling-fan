import React, { Component } from 'react';
import './Nav.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      team: null,
      selectedValue: 'all'
    }
  }

  handleChange = (e) => { 
    this.setState({selectedValue: e.target.value})
  }

  submitSelection = (e) => {
    e.preventDefault();
    this.props.findSelectedDivision(this.state.selectedValue);
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.props.findSearchedTeam(this.state.team);
  }
  
  setInputValue = (e) => { 
    this.setState({
      team: e.target.value
    })
  }

  render() {
    return (
      <nav className="nav-area">
        <form action="#">
          <input type="text"
                 className="search-input"
                 placeholder="Enter team name"
                 onChange={this.setInputValue}/>
          <button className="search-btn"
                  type="submit" 
                  onClick={this.submitSearch} >Submit Search</button>
          <label htmlFor="division-select">Select an NFL Division:</label>

          <select id="division-select"
                  value={this.state.selectedValue}
                  onChange={this.handleChange} >
            <option value="all">--Show All--</option>
            <option value="AFC">--AFC Division--</option>
            <option value="AFC North">AFC North</option>
            <option value="AFC East">AFC East</option>
            <option value="AFC South">AFC South</option>
            <option value="AFC West">AFC West</option>
            <option value="NFC">--NFC Division--</option>
            <option value="NFC North">NFC North</option>
            <option value="NFC East">NFC East</option>
            <option value="NFC South">NFC South</option>
            <option value="NFC West">NFC West</option>
          </select>
          <button className="select-btn"
            type="submit"
            onClick={this.submitSelection} >Submit Selection</button>
        </form>
      </nav>
    )
  }
}