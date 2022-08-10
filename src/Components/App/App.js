import axios from 'axios'

import { createContext, useEffect, useState } from 'react'

import WeatherWrapper from '../WeatherWrapper/WeatherWrapper'

import './App.css'

export const AppContext = createContext()

const App = () => {

  const [isFetched, setIsFetched] = useState(true)
  const [data, setData] = useState(null)
  const [location, setLocation] = useState('')

  useEffect(() => {
    if (isFetched, location) {

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c2da379aeff738391f1ba4a764a98eec`)
  
      .then(response => {
        setData(response.data)
        setIsFetched(true)
      })

      .finally(() => {
        setIsFetched(false)
      })
    }

  }, [isFetched, location])

  return (
    <AppContext.Provider value={{data, location, setLocation}}>
      <WeatherWrapper/>
    </AppContext.Provider>
  )
}

export default App