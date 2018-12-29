import React from 'react';
import Nav from '../Nav.js';
import { shallow } from 'enzyme';


const fakeNflTeam = {
    "name": "Arizona Cardinals",
    "state": "Arizona",
    "city": "Glendale",
    "team_icon": "http://assets.stickpng.com/thumbs/580b585b2edbce24c47b2aff.png",
    "division": "NFC West",
    "team_img": "https://cdn.vox-cdn.com/thumbor/M5Gx-DCa9eRAqw_aqIyuG6I2wDo=/0x0:4777x3021/1200x800/filters:focal(2094x550:2858x1314)/cdn.vox-cdn.com/uploads/chorus_image/image/62274919/usa_today_11648254.0.jpg"
  }

const mockFindSearchedTeam = jest.fn()
const mockFindSelectedDivision = jest.fn()
describe('Nav', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Nav findSearchedTeam={mockFindSearchedTeam}
           findSelectedDivision={mockFindSelectedDivision} />
      )
  })

  it('should match the snapshot with all data passed correctly to the Nav', () => {
      expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({team: null, selectedValue: 'init'})
  })

  it('should set the state with a selected divison/conference from the dropdown menu', () => {
    expect(wrapper.state()).toEqual({team: null, selectedValue: 'init'})
    wrapper.find('select').simulate('change', {target: {value : 'NFC'}})
    expect(wrapper.find('select').props().value).toBe('NFC')
    expect(wrapper.state()).toEqual({team: null, selectedValue: 'NFC'})
  })

  it('should set the state with a selected team when a team is entered into the search input field', () => {
    expect(wrapper.state()).toEqual({team: null, selectedValue: 'init'})
    wrapper.find('input').simulate('change', {target: {value : 'Arizona'}})
    expect(wrapper.state()).toEqual({team: "Arizona", selectedValue: 'init'})
  })
}) 
