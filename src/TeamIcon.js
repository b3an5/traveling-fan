import React from 'react';
import './css/reset.css';
import './css/TeamIcon.scss';

function TeamIcon(props) {

  return(
    <article className={props.teamColor}>
      <img
        src={props.nflTeam.team_icon}
        onClick={props.switchToPopup}
        className="icon-img"
        alt="team logo" /> 
      <h2 onClick={props.switchToPopup}>
        {props.nflTeam.name}
      </h2>
    </article>
  )
}

export default TeamIcon;