import React from 'react';
import TeamIcon from '../TeamIcon.js';
import { shallow } from 'enzyme';

const fakeNflTeam = [{
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png",
    "division": "NFC West",
    "team_img": "https://cdn.vox-cdn.com/thumbor/M5Gx-DCa9eRAqw_aqIyuG6I2wDo=/0x0:4777x3021/1200x800/filters:focal(2094x550:2858x1314)/cdn.vox-cdn.com/uploads/chorus_image/image/62274919/usa_today_11648254.0.jpg"
  }]
const mockTeamColor = 'arizona-cardinals'
const mockSwitchToPopup = jest.fn()


describe('TeamIcon', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(
      <TeamIcon 
        teamColor={mockTeamColor}
        switchToPopup={mockSwitchToPopup}
        nflTeam={fakeNflTeam}
        index={0}
        key={fakeNflTeam.name}
        />
      )
  });

  it('should match the snapshot with all data passed correctly to the Icon', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should recognize a click on the icon image', () => {
    wrapper.find('.icon-img').simulate('click')
    expect(mockSwitchToPopup).toBeCalled();
  })

  it('should recognize a click on the team name', () => {
    wrapper.find('h2').simulate('click')
    expect(mockSwitchToPopup).toBeCalled();   
  })
})