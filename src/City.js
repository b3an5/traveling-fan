import React, { Component } from 'react';
import './css/City.scss';
import xIcon from './images/xIcon.svg';

function City(props) {

  const selectedCity = props.matchedCity;
  const cityAttractions = props.cities[props.clickedIndex].attractions;

  return (
    <div className='card'>
      <img className='x-icon' onClick={props.toggleCardView} src={xIcon} alt="icon" />
      <img className="card-img" src={selectedCity.city_image} alt="city" />
      <h2>{selectedCity.name}, {selectedCity.state}</h2>
      <h2>Population: {selectedCity.population}</h2>
      {cityAttractions.map((attraction) => {
        let link = `https://google.com/search?q=${`${attraction}`.trim().split(' ').join('%20')}`;
        return <h2><a href={link} target="_blank" rel="noopener noreferrer" >{attraction}</a></h2>
      })}
      <button onClick={props.showTeamInfo} className="card-btn">Show Team Info</button>
      <h1 className='left-carot carot' onClick={props.cityCarouselLeft}>&laquo;</h1>
      <h1 className='right-carot carot' onClick={props.cityCarouselRight}>&raquo;</h1>
    </div>

  )
}

export default City;