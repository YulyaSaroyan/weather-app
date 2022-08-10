import { RiCelsiusLine } from 'react-icons/ri'

import './FeelsLike.css'

const FeelsLike = ({ data }) => {
    return (
        <div className="feels-like">
            <p>feels like</p>
            <span>{data.main.feels_like.toFixed()}<RiCelsiusLine/></span>
        </div>
    )
}

export default FeelsLike