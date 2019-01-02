import React from 'react';
import './css/Card.scss';
// import xIcon from './images/xIcon.svg'
import xIcon from './images/x-icon.png'

function Card(props) {

  return (
    <div className='card'>
      <img className='x-icon'
        onClick={props.showAllTeams}
        src={xIcon}
        alt="icon" />
      <img className="card-img"
        src={props.currentTeam.team_img}
        alt="NFL team" />
      <h2 className='team-info'>
        {props.currentTeam.name}</h2>
      <h2 className='team-info'>
        {props.currentTeam.city}, {props.currentTeam.state}</h2>
      <h2 className='team-info'>
        {props.currentTeam.division}</h2>
      <button className="card-btn"
        onClick={props.switchPopupView}>
        Show City Info</button>
      <h1 className='left-carot carot'
        onClick={props.rotateCarousel}>&laquo;</h1>
      <h1 className='right-carot carot'
        onClick={props.rotateCarousel}>&raquo;</h1>
    </div>
  )
}

export default Card;