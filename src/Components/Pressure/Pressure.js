import './Pressure.css'

const Pressure = ({ data }) => {
    return (
        <div className="pressure">
            <p>pressure</p>
            <span>{data.main.pressure} mb</span>
        </div>
    )
}

export default Pressure