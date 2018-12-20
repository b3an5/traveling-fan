import React from 'react';
import './reset.css';
import './TeamIcon.scss';

export default function teamIcon(props) {

    function toggleIconFunctions() {
      props.toggleCardView();
      props.grabIndex(props.index)
    }

    return(
      <article onClick={toggleIconFunctions}>
        <img src={props.nflTeam.team_icon} /> 
        <h2>{props.nflTeam.name}</h2>
      </article>
    )
  }


