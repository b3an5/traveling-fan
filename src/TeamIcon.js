import React from 'react';
import './css/reset.css';
import './css/TeamIcon.scss';

const TeamIcon = (props) => {

  return(
    <article onClick={() => props.toggleIconFunctions(props.index)} className={props.teamColor}>
      <img src={props.nflTeam.team_icon} className="icon-img" alt="team logo"/> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

export default TeamIcon;