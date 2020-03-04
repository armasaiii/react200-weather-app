import React from 'react'
import { 
    updateCityName,
    getWeather
  } from './searchActions'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleLinkClick = this.handleLinkClick.bind(this)
    }

    onChange(e) {
      console.log(e)
        const {dispatch} = this.props
        const {value} = e.target
        dispatch(updateCityName(value))
      }
    
      handleClick() {
        const {dispatch, city} = this.props
        dispatch(getWeather(city))
      }
    
      handleLinkClick (e) {
        //e.prevDefault()
        const {dispatch, city} = this.props
        const {value} = e.target
        dispatch(getWeather(value || city))
      }

    render() {
        return(
            <form>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" value="san diego" onClick={this.handleLinkClick}>San Diego</button>
                <button type="button" className="btn btn-primary" value="new york" onClick={this.handleLinkClick}>New York</button>
                <button type="button" className="btn btn-primary" value="washington" onClick={this.handleLinkClick}>Washington D.C</button>
                <button type="button" className="btn btn-primary" value="london" onClick={this.handleLinkClick}>London</button>
                <button type="button" className="btn btn-primary" value="tokyo" onClick={this.handleLinkClick}>Tokyo</button>
              </div>
              <div className="input-group">
                <input type="text" 
                  className="form-control" 
                  placeholder="" aria-label="" 
                  aria-describedby="basic-addon1"
                  value={this.props.city}
                  onChange={this.onChange}
                />
              <div className="input-group-append">
                <button 
                  className="btn btn-success" 
                  type="button" 
                  onClick={this.handleClick}>
                    GO!!!
                </button>
              </div>
              </div>
            </form>
        )
    }
}
