// FiltreTravel.jsx
import React, { useState } from 'react';
import './filtreTravel.css';

const FiltreTravel = ({ items, setFilteredItems }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minDuration, setMinDuration] = useState('');
    const [maxDuration, setMaxDuration] = useState('');

    const handleFilter = () => {
        if (!items || !Array.isArray(items)) {
            console.error('Items is not defined or not an array');
            return;
        }

        const filteredItems = items.filter(item => {
            const price = parseFloat(item.price);
            const duration = parseFloat(item.duration);

            const minPriceValue = parseFloat(minPrice);
            const maxPriceValue = parseFloat(maxPrice);
            const minDurationValue = parseFloat(minDuration);
            const maxDurationValue = parseFloat(maxDuration);

            const isPriceValid = !isNaN(minPriceValue) && !isNaN(maxPriceValue);
            const isDurationValid = !isNaN(minDurationValue) && !isNaN(maxDurationValue);

            const isPriceInRange = (!minPrice || price >= minPriceValue) && (!maxPrice || price <= maxPriceValue);
            const isDurationInRange = (!minDuration || duration >= minDurationValue) && (!maxDuration || duration <= maxDurationValue);

            return isPriceValid && isDurationValid && isPriceInRange && isDurationInRange;
        });

        setFilteredItems(filteredItems);
    };

    return (
        <div className="filtre-global">
            <div className="filtre">
                <label>Min Price:</label>
                <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            </div>
            <div className="filtre">
                <label>Max Price:</label>
                <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            </div>
            <div className="filtre">
                <label>Min Duration:</label>
                <input type="number" value={minDuration} onChange={e => setMinDuration(e.target.value)} />
            </div>
            <div className="filtre">
                <label>Max Duration:</label>
                <input type="number" value={maxDuration} onChange={e => setMaxDuration(e.target.value)} />
            </div>
            <button className="centered-button" onClick={handleFilter}>Apply</button>
        </div>
    );
};

export default FiltreTravel;
