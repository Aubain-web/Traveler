// filtreTravel.jsx
import React, { useState } from 'react';
import './filtreTravel.css';

<<<<<<< HEAD
const FiltreTravel = ({ maxPrice, setMaxPrice, sortOrder, setSortOrder }) => {
=======
const FiltreTravel = ({ items, setFilteredItems }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minDuration, setMinDuration] = useState('');
    const [maxDuration, setMaxDuration] = useState('');

    const handleFilter = () => {
        const filteredItems = items.filter(item => {
            const price = parseFloat(item.price);
            const duration = parseFloat(item.duration);

            const isPriceInRange = (!minPrice || price >= parseFloat(minPrice)) && (!maxPrice || price <= parseFloat(maxPrice));
            const isDurationInRange = (!minDuration || duration >= parseFloat(minDuration)) && (!maxDuration || duration <= parseFloat(maxDuration));

            return isPriceInRange && isDurationInRange;
        });

        setFilteredItems(filteredItems);
    };

>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
    return (
        <div className="sort-filter">
            <div className="filter-options">
                <label>
                    Prix maximal:
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Entrer un prix maximal"
                    />
                </label>
            </div>
            <div className="sort-options">
                <label>
                    Trier par prix:
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Croissant</option>
                        <option value="desc">Décroissant</option>
                    </select>
                </label>
            </div>
        </div>
    );
};
export default FiltreTravel;
