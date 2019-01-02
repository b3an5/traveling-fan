import React, { Component } from 'react';
import './css/Main.scss';
export default class Nav extends Component {
  constructor() {
    super();
    
    this.state = {
      team: null,
      selectedValue: 'init'
    }
  }

  setSelection = (e) => { 
    this.setState({ selectedValue: e.target.value },
      () => this.props.findSelectedDivision(this.state.selectedValue))
  }
  
  setInputValue = (e) => { 
    this.setState({ team: e.target.value },
      () => this.props.findSearchedTeam(this.state.team))
  }

  render() {
    return (
      <nav className="nav-area">
        <form action="#">
          <input type="text"
                 className="search-input"
                 placeholder="Enter team name"
                 onChange={this.setInputValue}/>
          <label htmlFor="division-select">-- OR --</label>
          <select id="division-select"
                  value={this.state.selectedValue}
                  onChange={this.setSelection} >
            <option value="init" disabled>Select a Division: </option>
            <option value="all">Show All</option>
            <option disabled></option>
            <option value="AFC">AFC Conference</option>
            <option value="AFC North">AFC North</option>
            <option value="AFC East">AFC East</option>
            <option value="AFC South">AFC South</option>
            <option value="AFC West">AFC West</option>
            <option disabled></option>
            <option value="NFC">NFC Conference</option>
            <option value="NFC North">NFC North</option>
            <option value="NFC East">NFC East</option>
            <option value="NFC South">NFC South</option>
            <option value="NFC West">NFC West</option>
          </select>
        </form>
      </nav>
    )
  }
}