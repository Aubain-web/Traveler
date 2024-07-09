// filtreTravel.jsx
import React, { useState } from 'react';
import './filtreTravel.css';

const FiltreTravel = ({ maxPrice, setMaxPrice, sortOrder, setSortOrder }) => {
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
