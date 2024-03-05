import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const depart = params.get('depart');
    const arrive = params.get('arrive');
    const date = params.get('date');
    const [flightData, setFlightData] = useState([]);

    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/getFlightInfo?departure=${depart}&arrival=${arrive}&date=${date}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch flight information');
                }
                const data = await response.json();
                setFlightData(data.data);
                console.log("my datas :", data.data[0].id)
            } catch (error) {
                console.error('Error fetching flight data:', error.message);
            }
        };

        fetchFlightData();
    }, [depart, arrive, date]);
                    console.log("flightData", flightData);

    return (
        <div className="search-result">
            <h2>Search result</h2>
            {Array.isArray(flightData) && flightData.length > 0 ? (
                flightData.map((flight, index) => (
                    <div key={index}>
                        <p>ID: {flight.id}</p>
                        <p>Instant Ticketing Required: {flight.instantTicketingRequired.toString()}</p>
                        <p>Price:</p>
                        <ul>
                            <li>Currency: {flight.price.currency}</li>
                            <li>Total: {flight.price.total}</li>
                            <li>Base: {flight.price.base}</li>
                        </ul>
                    </div>
                ))
            ) : (
                <p>No flight data available</p>
            )}
        </div>
    );
};

export default SearchResult;
