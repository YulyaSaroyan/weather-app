import { useContext } from 'react'
import { AppContext } from '../App/App'

import './LocationSearch.css'

const LocationSearch = () => {

    const { location, setLocation } = useContext(AppContext)

    return (
        <div className="location-search">
            <input 
                type="search" 
                value={location} 
                onChange={e => setLocation(e.target.value)}
                onBlur={() => setLocation('')}
                placeholder="Search a City"
            />
        </div>
    )
}

export default LocationSearch