import React from 'react';
import './reset.css';
import './TeamIcon.scss';

export default function TeamIcon(props) {
  return(
    <article>
      <img src={props.nflTeam.team_icon} /> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

