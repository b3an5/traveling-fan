import React from 'react';
import './css/Card.scss';
import xIcon from './images/xIcon.svg'

function Card(props) {

  const selectedTeam = props.nflTeams[props.clickedIndex];
  return (
    <div className='card'>
      <img className='x-icon' onClick={props.toggleCardView} src={xIcon} alt="icon" />
      <img className="card-img" src={selectedTeam.team_img} alt="NFL team"/>
      <h2 className='team-info' >{selectedTeam.name}</h2>
      <h2 className='team-info' >{selectedTeam.city}, {selectedTeam.state}</h2>
      <h2 className='team-info' >{selectedTeam.division}</h2>
      <button onClick={props.findMatchingCity} className="card-btn">Show City Info</button>
      <h1 className='left-carot carot' onClick={props.teamCarouselLeft}>&laquo;</h1>
      <h1 className='right-carot carot' onClick={props.teamCarouselRight}>&raquo;</h1>
    </div>
  )
}

export default Card;