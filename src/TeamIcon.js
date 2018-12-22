import React from 'react';
import './reset.css';
import './TeamIcon.scss';

export default function teamIcon(props) {

  function toggleIconFunctions() {
    props.toggleCardView();
    props.getIndex(props.index)
  }
  var teamColor = props.nflTeam.name.split(' ').join('-').toLowerCase();
  return(
    <article onClick={toggleIconFunctions} className={teamColor}>
      <img src={props.nflTeam.team_icon} alt="team logo"/> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

