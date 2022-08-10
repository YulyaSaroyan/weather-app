import { useContext } from 'react'
import { AppContext } from '../App/App'

import { RiCelsiusLine } from 'react-icons/ri'
import { SiIcloud } from 'react-icons/si'
import { GiRaining, GiFog, GiSandstorm } from 'react-icons/gi'
import { BsFillSunFill, BsCloudSnowFill, BsCloudSlashFill } from 'react-icons/bs'

import './LocationCelsius.css'

const LocationCelsius = () => {

    const { data } = useContext(AppContext)

    return (
        data && <div className="location-celsius">
            <div className="city-temp">
                <h3>{data.name}, {data.sys.country}</h3>
                <p>{data.weather[0].main}</p>
                <h1>{data.main.temp.toFixed()}<RiCelsiusLine/></h1>
            </div>
            {
                data.weather[0].main === 'Clouds' ? <SiIcloud className="cloud"/> : 
                data.weather[0].main === 'Rain' ? <GiRaining className="rain"/> :
                data.weather[0].main === 'Sun' ? <BsFillSunFill className="sun"/> :
                data.weather[0].main === 'Clear' ? <BsCloudSlashFill className="clear"/> : 
                data.weather[0].main === 'Mist' ? <GiFog className="mist"/> : 
                data.weather[0].main === 'Snow' ? <BsCloudSnowFill className="snow"/> : 
                data.weather[0].main === 'Extreme' ? <GiSandstorm className="extreme"/> : ''
            }
        </div>
    )
}

export default LocationCelsius