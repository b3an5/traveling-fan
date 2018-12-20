import React from 'react';
import './reset.css';
import './TeamIcon.scss';

export default function teamIcon(props) {

  function toggleIconFunctions() {
    props.toggleCardView();
    props.getIndex(props.index)
  }

  return(
    <article onClick={toggleIconFunctions}>
      {console.error('team icon line 14 fix for dataset')}
      <img src={props.nflTeam.helmet_image} alt="team logo"/> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

