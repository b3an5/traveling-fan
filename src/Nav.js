import React, { Component } from 'react';
import './Nav.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      i: null
    }
  }

  render() {
    return (
      <nav className="nav-area">
        <form action="#">
          <input type="text" placeholder="Enter team name or city" />
          <label for="division-select">Select an NFL Division:</label>

          <select id="division-select">
            <option value="afc">--AFC Division--</option>
            <option value="afc-north">AFC North</option>
            <option value="afc-east">AFC East</option>
            <option value="afc-south">AFC South</option>
            <option value="afc-west">AFC West</option>
            <option value="nfc">--NFC Division--</option>
            <option value="nfc-north">NFC North</option>
            <option value="nfc-east">NFC East</option>
            <option value="nfc-south">NFC South</option>
            <option value="nfc-west">NFC West</option>
          </select>

        </form>
      </nav>
    )
  }
}