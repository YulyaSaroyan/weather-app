import './Visibility.css'

const Visibility = ({ data }) => {
    return (
        <div className="visibility">
            <p>visibility</p>
            <span>{data.visibility} m</span>
        </div>
    )
}

export default Visibility