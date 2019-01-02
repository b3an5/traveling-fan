import React from 'react';
import './css/Main.scss';

function TeamIcon(props) {

  return(
    <article className={props.teamColor}
             onClick={props.switchToPopup}>
      <img
        src={props.nflTeam.team_icon}
        className="icon-img"
        alt="team logo" /> 
      <h2>
        {props.nflTeam.name}
      </h2>
    </article>
  )
}

export default TeamIcon;