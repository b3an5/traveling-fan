import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import { nflTeams, cities } from '../dataset/nfl-cities.js'



describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App  />
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot with all data passed correctly to the Popup', () => {
      expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      nflTeams: null,
      cities: null,
      isLoading: true,
      allTeams: null
    })
  })

  it.skip('should insert missing cities into Cities array to match length of NFLTeams array', () => {
    const length = cities.length
    wrapper.instance().matchCitiesToTeams(cities)
    expect(length).toEqual(length + 2)
   /* 
         This feels like something that we should test.
          We are modifying our data in our application
          Should we test against the fetch call
          or test against our data?  ( which is NOW UPDATED WITH 
          ALL cities because we needed to write a test for carousel)
    */
  })

  it('should be able to find a team that has been searched for', () => {
    expect(wrapper.state()).toEqual({
      nflTeams: null,
      cities: null,
      isLoading: true,
      allTeams: null
    })
    // wrapper.instance().componentDidMount()
    wrapper.instance().findSearchedTeam('denver')
    expect(wrapper.state()).toEqual({nflTeams: nflTeams[9]})
  })

  it.skip('', () => {
    
  })
  it.skip('', () => {

  })
});
