import Config from "../api/config"

const Flights = () =>{
    return(
        <>
        <div className="depart">
            {Config.options.params.fromId}
        </div>
        <div className="destination">
            {Config.options.params.toId}
        </div>
        <div className="date">
            {Config.options.params.departDate}
        </div>
        <div className="adult">
            {Config.options.params.adults}
        </div>
        <div className="kid">
            {Config.options.params.children}
        </div>
        </>
    )
}

export default Flights;