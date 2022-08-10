import LocationSearch from '../LocationSearch/LocationSearch'
import LocationCelsius from '../LocationCelsius/LocationCelsius'
import WeatherData from '../WeatherData/WeatherData'

import './WeatherWrapper.css'

const WeatherWrapper = () => {
    return (
        <div className="container">
            <div className="weather-wrapper">
                <LocationSearch/>
                <LocationCelsius/>
                <WeatherData/>
            </div>
        </div>
    )
}

export default WeatherWrapper