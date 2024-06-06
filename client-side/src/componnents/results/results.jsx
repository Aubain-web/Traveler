// SearchResult.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './results.css';
import ModalComponent from '../modalComponent/modalComponent.jsx';
import FiltreTravel from '../filtre/filtreTravel.jsx';
import { useUser } from "../context2/useContext.jsx";

const SearchResult = ({ items }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const translatedDepart = params.get('depart');
    const translatedArrive = params.get('arrive');
    const dateDepart = params.get('dateDepart');
    const dateArrive = params.get('dateArrive');
    const adults = params.get('adults');
    const children = params.get('children');

    const [flightData, setFlightData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [open, setOpen] = useState(false);
    const { user } = useUser();
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/getFlightInfo?departure=${translatedDepart}&arrival=${translatedArrive}&departureDate=${dateDepart}&returnDate=${dateArrive}&adults=${adults}&children=${children}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch flight information');
                }
                const data = await response.json();
                setAllItems(data.data);
                console.log(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching flight data:', error.message);
                setIsLoading(false);
                setError('Aucun résultat correspondant à votre recherche');
            }
        };

        fetchFlightData();
    }, [translatedDepart, translatedArrive, dateDepart, dateArrive, adults, children]);

    useEffect(() => {
        setFlightData(filteredItems.length > 0 ? filteredItems : allItems);
    }, [allItems, filteredItems]);

    const handleFlightClick = (flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderFlightBlocks = () => {
        if (error && !isLoading && (!flightData || flightData.length === 0)) {
            return <div className="error-message">{error}</div>;
        }

        return flightData.map((flight, index) => (
            <div key={index} className="flight-item" onClick={() => handleFlightClick(flight)}>
                <p>Référence de vol ID: {flight.id}</p>
                <p>Instant Ticketing Required: {flight.instantTicketingRequired.toString()}</p>
                <p>Price: {flight.price?.total}</p>
                <p>Currency: {flight.price?.currency}</p>
            </div>
        ));
    };

    return (
        <div className="search-result">
            <div className="search-result-content">
                <h2>Search result</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <div className="flight-block">{renderFlightBlocks()}</div>
                    </div>
                )}
            </div>
            {selectedFlight && (
                <ModalComponent flight={selectedFlight} open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description" className="modal-box" />
            )}
        </div>
    );
};

export default SearchResult;
