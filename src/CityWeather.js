import axios from 'axios'
import React, { Component } from 'react'

export default class CityWeather extends Component {
    render() {
        return (
            <div>
               {this.props.cityName}
            </div>
        )
    }
}
