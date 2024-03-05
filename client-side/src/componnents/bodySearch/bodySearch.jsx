// BodySearch.jsx
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bodySearch.css';
import ville from '../../dictionaire-ville/villeConv.jsx';

const BodySearch = () => {
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleDepartChange = (e) => {
        setDepart(e.target.value);
    };

    const handleArriveChange = (e) => {
        setArrive(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSearch = () => {
        const translatedDepart = ville()[depart] || depart;
        const translatedArrive = ville()[arrive] || arrive;
        navigate(`/search-result?depart=${translatedDepart}&arrive=${translatedArrive}&date=${date}`);
    };

    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    className="depart"
                    placeholder="Departure"
                    value={depart}
                    onChange={handleDepartChange}
                />
                <input
                    type="text"
                    className="arrive"
                    placeholder="Arrival"
                    value={arrive}
                    onChange={handleArriveChange}
                />
                <input
                    type="date"
                    className="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <div className="search-btn">
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default BodySearch;
