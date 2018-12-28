import React from 'react';
import './css/reset.css';
import './css/TeamIcon.scss';

const TeamIcon = (props) => {

  return(
    <article
      onClick={props.showTeamInfo()}
      className={props.teamColor}>
      <img
        src={props.nflTeam.team_icon}
        onClick={props.showTeamInfo()}  className="icon-img" alt="team logo" /> 
      <h2 onClick={props.showTeamInfo()}>
        {props.nflTeam.name}
      </h2>
    </article>
  )
}

export default TeamIcon;