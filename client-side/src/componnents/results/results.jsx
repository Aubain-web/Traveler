<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
// SearchResult.jsx
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './results.css';
import ModalComponent from '../modalComponent/modalComponent.jsx';
<<<<<<< HEAD
import { useUser } from "../context2/useContext.jsx";
import FiltreTravel from "../filtre/filtreTravel.jsx";
=======
import FiltreTravel from '../filtre/filtreTravel.jsx';
import { useUser } from "../context2/useContext.jsx";
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca

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
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // Ajout de l'état sortOrder
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
<<<<<<< HEAD
        const filteredData = allItems.filter(flight => {
            const price = parseFloat(flight.price.total);
            return maxPrice ? price <= maxPrice : true;
        }).sort((a, b) => {
            const priceA = parseFloat(a.price.total);
            const priceB = parseFloat(b.price.total);
            return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
        });
        setFilteredItems(filteredData);
    }, [maxPrice, sortOrder, allItems]);

    useEffect(() => {
=======
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
        setFlightData(filteredItems.length > 0 ? filteredItems : allItems);
    }, [allItems, filteredItems]);

    const handleFlightClick = (flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

<<<<<<< HEAD
    const renderFlightCards = () => {
        if (error && !isLoading && (!flightData || flightData.length === 0)) {
            return <div className="alert alert-danger">{error}</div>;
        }

        return flightData.map((flight, index) => (
            <div key={index} className="col-md-4 mb-4">
                <div className="card flight-card" onClick={() => handleFlightClick(flight)}>
                    <div className="card-body">
                        <h5 className="card-title">Référence de vol ID: {flight.id}</h5>
                        <p className="card-text">Instant Ticketing Required: {flight.instantTicketingRequired.toString()}</p>
                        <p className="card-text">Price: {flight.price?.total} {flight.price?.currency}</p>
                    </div>
                </div>
=======
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
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
            </div>
        ));
    };

    return (
        <div className="container mt-5">
            <FiltreTravel className="mb-4" maxPrice={maxPrice} setMaxPrice={setMaxPrice} sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <div className="row justify-content-center">
                <h2 className="mb-4 text-center">Search result</h2>
                {isLoading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
<<<<<<< HEAD
                    <div className="row justify-content-center">
                        {renderFlightCards()}
=======
                    <div>
                        <div className="flight-block">{renderFlightBlocks()}</div>
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
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
