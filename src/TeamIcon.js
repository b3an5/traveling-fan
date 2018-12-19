import React from 'react';

export default function TeamIcon(props) {
  return(
    <article onClick={props.toggleCardView}>
      <img src={props.nflTeam.helmet_image} /> 
      <h2>{props.nflTeam.name}</h2>
    </article>
  )
}

