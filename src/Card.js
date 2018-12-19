import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      teamInfo: true
    }
  }

  toggleCityInfo = (event) => {
    event.preventDefault();
    this.setState({
      teamInfo: !this.state.teamInfo
    })
  }

  render() {
    let hrefExample1 = this.props.cities[0].attractions[0].trim().split(' ').join('%20')

    if (this.state.teamInfo) {
      return (
        <div>
          <img src={this.props.nflTeams[0].team_img} />
          <h2>{this.props.nflTeams[0].name}</h2>
          <h2>{this.props.nflTeams[0].city}</h2>
          <h2>{this.props.nflTeams[0].division}</h2>
          <button onClick={this.toggleCityInfo}>Show City Info</button>
        </div>
      )
    } else {
      return (
        <div>
          <img src={this.props.cities[0].city_image} />
          <h2>{this.props.cities[0].name}</h2>
          <h2>{this.props.cities[0].state}</h2>
          <h2>Population: {this.props.cities[0].population}</h2>
          <h2><a href={`https://google.com/search?q=${this.props.cities[0].attractions[0].trim().split(' ').join('%20')}`}>{this.props.cities[0].attractions[0]}</a></h2>
          <h2><a href={`https://google.com/search?q=${this.props.cities[0].attractions[1].trim().split(' ').join('%20')}`}>{this.props.cities[0].attractions[1]}</a></h2>
          <h2><a href={`https://google.com/search?q=${this.props.cities[0].attractions[2].trim().split(' ').join('%20')}`}>{this.props.cities[0].attractions[2]}</a></h2>
          <h2><a href={`https://google.com/search?q=${this.props.cities[0].attractions[3].trim().split(' ').join('%20')}`}>{this.props.cities[0].attractions[3]}</a></h2 >
          <button onClick={this.toggleCityInfo}>Show Team Info</button>
        </div>
      )
    }
  }

}