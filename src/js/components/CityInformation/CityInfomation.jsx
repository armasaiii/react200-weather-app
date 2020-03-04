import React from 'react'

export default class CityInformation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='card border-success mb-3'>
                <div className='card-body'>
                <div className='card-header text-white bg-success'>City Information</div>
                </div>
                <div className="col-sm-12 text-center">
                    <h1 className="card-title" name="city">
                    {this.props.city}
                </h1>
                    <p className="card-text" name="location">{this.props.lon} {this.props.lat}</p>
                <hr />
                </div>
                <div className="col-sm-4 text-center">
                <div className="card-body">
                    <h6 className="card-title">Temperature:</h6>
                    <p className="card-text" onClick={this.props.temp} name="temp">{this.props.temp}</p>
                </div>
                </div>
                <div className="col-sm-4 text-center">
                <div className="card-body">
                    <h6 className="card-title">Pressure:</h6>
                    <p className="card-text" name="pressure">{this.props.pressure}</p>
                </div>
                </div>
                <div className="col-sm-4 text-center">
                <div className="card-body ">
                    <h6 className="card-title">Humidity:</h6>
                    <p className="card-text" name="humidity">{this.props.humidity}</p>
                </div>
                </div>
                <div className="col-sm-4 text-center">
                <div className="card-body">
                    <h6 className="card-title">Lowest Temp (F):</h6>
                    <p className="card-text" name="low">{this.props.lowestTemp}</p>
                </div>
                </div>
                <div className="col-sm-4 text-center">
                <div className="card-body">
                    <h6 className="card-title">Highest Temp (F):</h6>
                    <p className="card-text" name="high">{this.props.highestTemp}</p>
                </div>
                </div>
                <div className="col-sm-4 text-center">
                <div className="card-body">
                    <h6 className="card-title">Wind Speed:</h6>
                    <p className="card-text" name="wind">{this.props.windSpeed}</p>
                </div>
                </div>
            </div>
        )
    }
}

