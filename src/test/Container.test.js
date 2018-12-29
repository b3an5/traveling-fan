import React from 'react';
import Container from '../Container.js';
import { shallow } from 'enzyme';
import { nflTeams, cities } from '../dataset/nfl-cities.js'

const mockTeamClick = {target: {parentElement: {className: 'arizona-cardinals'}}}
const mockWord = {target: {parentElement: {className: 'denver-broncos'}}}
const mockSetCarouselIndex = jest.fn()

describe('Container', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Container 
        nflTeams={nflTeams}
        cities={cities} />
    )
  })

  it('should match the snapshot with all data passed correctly to the Container', () => {
      expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      displayTeamIcons: true,
      teamToDisplay: null,
      cityToDisplay: null
    })
  })

  it('should change view from all team icons to show a popup of a single team', () => {
    expect(wrapper.state()).toEqual({
      displayTeamIcons: true,
      teamToDisplay: null,
      cityToDisplay: null
    })
    wrapper.instance().switchToPopup(mockTeamClick)
    expect(wrapper.state()).toEqual({
      displayTeamIcons: false,
      teamToDisplay: nflTeams[0],
      cityToDisplay: cities[0]
    })
  })

  it('should return the last word (team name) in an NFL team with an uppercase first letter', () => {
    expect(wrapper.instance().getTargetWord(mockWord)).toEqual('Broncos')
  })

  it('should update state to display all team icons', () => {
    
    wrapper.instance().switchToPopup(mockTeamClick)
    wrapper.instance().showAllTeams()
    expect(wrapper.state()).toEqual({
      displayTeamIcons: true,
      teamToDisplay: null,
      cityToDisplay: null
    })
  })

  it('should (on click) increment or decrement the index in the carousel', () => {
    wrapper.instance().switchToPopup(mockTeamClick)
    
    wrapper.instance().rotateCarousel(1)
    expect(wrapper.state()).toEqual({
      displayTeamIcons: false,
      teamToDisplay: nflTeams[1],
      cityToDisplay: cities[1]
    })

    wrapper.instance().rotateCarousel(-1)
    expect(wrapper.state()).toEqual({
      displayTeamIcons: false,
      teamToDisplay: nflTeams[0],
      cityToDisplay: cities[0]
    })
  })

  it('should (on click) increment or decrement and wrap the index in the carousel from BEGINNING to END and vice versa', () => {

    wrapper.instance().switchToPopup(mockTeamClick)
    
    wrapper.instance().rotateCarousel(-1)
    expect(wrapper.state()).toEqual({
      displayTeamIcons: false,
      teamToDisplay: nflTeams[31],
      cityToDisplay: cities[31]
    })

    wrapper.instance().rotateCarousel(1)
    expect(wrapper.state()).toEqual({
      displayTeamIcons: false,
      teamToDisplay: nflTeams[0],
      cityToDisplay: cities[0]
    })
  })

  it('should update the state with the new city or team index while in the middle of the range', () => {
    expect(wrapper.state()).toEqual({
      displayTeamIcons: true,
      teamToDisplay: null,
      cityToDisplay: null
    })

    wrapper.instance().setCarouselIndex(15, 1)
    expect(wrapper.state()).toEqual({
      displayTeamIcons: true,
      teamToDisplay: nflTeams[16],
      cityToDisplay: cities[16]
    })
  })  

}) 
