import React, {Component} from 'react'
import CityWeather from './CityWeather'

export default class WeatherApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            city: "London"
        }
    }


    handleChange = (e) => {
        this.setState({city: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({cityNameForWeather: this.state.city})
    }
    render() {
        return (
            <div className="container">
                <CityWeather cityName={this.state.cityNameForWeather}/>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >City</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" onChange={this.handleChange} value={this.state.city} aria-describedby="emailHelp" placeholder="Enter city" />

                    </div>

                    <button type="submit" className="btn btn-primary">Search</button>

                </form>
            </div>
        )
    }
}
