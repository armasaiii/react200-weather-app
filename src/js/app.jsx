import React from 'react'
import CityInformation from './components/CityInformation'
import SearchBar from './components/SearchBar'
import SearchHistory from './components/SearchHistory'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Mando's Weather App'</h1>
        </div>
          <SearchBar/>
          <br/>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation/>
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory/>
          </div>
        </div>
      </div>
    );
  }
}
