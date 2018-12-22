import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';


const teams = [{
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png",
    "division": "NFC West",
    "team_img": "https://cdn.vox-cdn.com/thumbor/M5Gx-DCa9eRAqw_aqIyuG6I2wDo=/0x0:4777x3021/1200x800/filters:focal(2094x550:2858x1314)/cdn.vox-cdn.com/uploads/chorus_image/image/62274919/usa_today_11648254.0.jpg"
  }]

const usedCities = [{"attractions": ["Wildlife World Zoo", "White Tank Mountain Regional Park", "Westgate Arena", "Thunderbird Conservation Park"],
"city_image": "http://res.cloudinary.com/simpleview/image/upload/v1529338630/clients/phoenix/58468198_2b66_4f1e_8687_e26d986f678a_10c75a12-fe18-44d2-ab79-ed92fdb8ff6f.jpg",
"name": "Glendale",
"population": 226721,
"state": "Arizona"}];
const mockToggleCardView = jest.fn();
const mockClickedIndex = 0

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
     
     
      <Card 
        nflTeams={teams}
        cities={usedCities}
        toggleCardView={mockToggleCardView}
        clickedIndex={mockClickedIndex} />
     
      )
  })

  it('should match the snapshot with all data passed correctly to the card', () => {
    expect(wrapper).toMatchSnapshot();
  })


  it('should have all the proper default state', () => {
    expect(wrapper.state()).toEqual({teamInfo: true, matchedCity: null })
  })
})