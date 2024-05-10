import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './results.css';
import ModalComponent from '../modalComponent/modalComponent.jsx';
import {useUser} from "../context/userContext.jsx";
import FiltreTravel from '../filtre/filtreTravel.jsx';
import './results.css';

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

    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/getFlightInfo?departure=${translatedDepart}&arrival=${translatedArrive}&departureDate=${dateDepart}&returnDate=${dateArrive}&adults=${adults}&children=${children}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch flight information');
                }
                const data = await response.json();
                //setFlightData(data.data);
                setAllItems(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching flight data:', error.message);
                setIsLoading(false);
                setError('Aucun résultat correspondant à votre recherche');
            }
        };

        fetchFlightData();

        return () => {

        };
    }, [translatedDepart, translatedArrive, dateDepart, dateArrive, adults, children]);

    useEffect(() => {
        // Update flight data when items change
        setFlightData(allItems);
    }, [allItems]);

    const handleFlightClick = (flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderFlightBlocks = () => {
        // Vérifie si des données de vol ont été récupérées et si elles sont définies
        if (!flightData || flightData.length === 0 && !isLoading && error) {
            return (
                <div className="error-message">{error}</div>
            );
        }

        const flightBlocks = [];
        for (let i = 0; i < flightData.length; i += 4) {
            const flightBlock = flightData.slice(i, i + 4);
            flightBlocks.push(
                <div key={i} className="flight-block">
                    {flightBlock.map((flight, index) => (
                        <div key={index} className="flight-item" onClick={() => handleFlightClick(flight)} /*onClick={() => handleFlightClick(flight)}*/>
                            <p>Référence de vol ID: {flight.id}</p>
                            <p>Instant Ticketing Required: {flight.instantTicketingRequired.toString()}</p>
                            <p>Price:  {flight.price.total}</p>
                            <p>Currency:  {flight.price.currency}</p>
                        </div>
                    ))}
                    <ModalComponent flight={selectedFlight} open={open} onClose={handleClose} aria-labelledby="modal-title"
                                    aria-describedby="modal-description"    className="modal-box"
                    />
                </div>
            );
        }
        return flightBlocks;
    };
    return (
        <div className="search-result">
            <div className="search-result-content">
                <h2>Search result</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {renderFlightBlocks()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResult;

