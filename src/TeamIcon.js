import React from 'react';
import './reset.css';
import './TeamIcon.scss';

const TeamIcon = (props) => {

  return(
    <article className='icon' onClick={() => props.toggleIconFunctions(props.index)}>
      {console.error('team icon line 14 fix for dataset')}
      <img src={props.nflTeam.helmet_image} alt="team logo"/> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

export default TeamIcon;