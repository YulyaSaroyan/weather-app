import { useContext } from 'react'
import { AppContext } from '../App/App'

import FeelsLike from '../FeelsLike/FeelsLike'
import Humidity from '../Humidity/Humidity'
import Pressure from '../Pressure/Pressure'
import Visibility from '../Visibility/Visibility'

import './WeatherData.css'

const WeatherData = () => {

  const { data } = useContext(AppContext)

  return (
    data && <div className="weather-data">
      <div className="feel-hum-pres">
        <FeelsLike data={data}/>
        <Humidity data={data}/>
        <Pressure data={data}/>
      </div>
      <Visibility data={data}/>
    </div>
  )
}

export default WeatherData