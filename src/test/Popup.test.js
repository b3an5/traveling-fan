import React from 'react';
import Popup from '../Popup.js';
import { shallow } from 'enzyme';


const fakeNflTeam = {
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png",
    "division": "NFC West",
    "team_img": "https://cdn.vox-cdn.com/thumbor/M5Gx-DCa9eRAqw_aqIyuG6I2wDo=/0x0:4777x3021/1200x800/filters:focal(2094x550:2858x1314)/cdn.vox-cdn.com/uploads/chorus_image/image/62274919/usa_today_11648254.0.jpg"
}
const fakeCity = {
    "name": "Glendale",
    "state": "Arizona",
    "city_image": "http://res.cloudinary.com/simpleview/image/upload/v1529338630/clients/phoenix/58468198_2b66_4f1e_8687_e26d986f678a_10c75a12-fe18-44d2-ab79-ed92fdb8ff6f.jpg",
    "population": 226721,
    "attractions": ["Wildlife World Zoo", "White Tank Mountain Regional Park", "Westgate Arena", "Thunderbird Conservation Park"]
}

const mockShowAllTeams = jest.fn()
const mockRotateCarousel = jest.fn()

describe('Popup', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Popup showAllTeams={mockShowAllTeams}
        team={fakeNflTeam}
        city={fakeCity}
        rotateCarousel={mockRotateCarousel}
        key={fakeNflTeam.name} />
      )
  })

  it('should match the snapshot with all data passed correctly to the Popup', () => {
      expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({displayTeamInfo: true})
  })

  it('should update state when switching between team and city views', () => {
    expect(wrapper.state()).toEqual({displayTeamInfo: true})
    wrapper.instance().switchPopupView()
    expect(wrapper.state()).toEqual({displayTeamInfo: false})
  })

  it('should pass the showAllTeams method actions up from city/card view to container', () => {
    wrapper.instance().showAllTeams()
    expect(mockShowAllTeams).toBeCalled()
  })

  it('should pass the rotateCarousel method actions up to Container with a LEFT direction from either city or team view', () => {
    wrapper.instance().rotateCarousel({target: {className: 'left-caret'}})
    expect(mockRotateCarousel).toBeCalled()
  })  

  it('should pass the rotateCarousel method actions up to Container with a RIGHT direction from either city or team view', () => {
    wrapper.instance().rotateCarousel({target: {className: 'right-caret'}})
    expect(mockRotateCarousel).toBeCalled()
  })

}) 
