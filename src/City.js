import React from 'react';
import './css/City.scss';
import xIcon from './images/xIcon.svg';

function City(props) {

  return (
    <div className='card'>
      <img className='x-icon'
           onClick={props.showAllTeams}
           src={xIcon}
           alt="icon" />
      <img className="card-img"
           src={props.currentCity.city_image}
           alt="city" />
      <h2>{props.currentCity.name}, {props.currentCity.state}</h2>
      <h2>Population: {props.currentCity.population}</h2>
        {
          props.currentCity.attractions.map((attraction) => {
            let formattedAttraction = `${attraction}`.trim().split(' ').join('%20');
            let link = `https://google.com/search?q=${formattedAttraction}`;
            return <h2 key={attraction}><a href={link} target="_blank" rel="noopener noreferrer" >{attraction}</a></h2>
          })
        }
      <button className="card-btn"
              onClick={props.switchPopupView}>Show Team Info</button>
      <h1 className='left-carot carot'
          onClick={props.rotateCarousel}>&laquo;</h1>
      <h1 className='right-carot carot'
          onClick={props.rotateCarousel}>&raquo;</h1>
    </div>

  )
}

export default City;