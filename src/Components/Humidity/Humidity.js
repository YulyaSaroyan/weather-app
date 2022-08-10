import './Humidity.css'

const Humidity = ({ data }) => {
    return (
        <div className="humidity">
            <p>humidity</p>
            <span>{data.main.humidity}%</span>
        </div>
    )
}

export default Humidity