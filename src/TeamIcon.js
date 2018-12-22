import React from 'react';
import './reset.css';
import './TeamIcon.scss';

const TeamIcon = (props) => {

  var teamColor = props.nflTeam.name.split(' ').join('-').toLowerCase();
  return(
    <article className='icon' onClick={() => props.toggleIconFunctions(props.index)} className={teamColor}>
      <img src={props.nflTeam.team_icon} alt="team logo"/> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

export default TeamIcon;