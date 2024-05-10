import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ville from '../../dictionaire-ville/villeConv.jsx';
import './bodySearch.css';


const BodySearch = () => {
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [dateDepart, setDateDepart] = useState('');
    const [dateArrive, setDateArrive] = useState('');
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const navigate = useNavigate();

    const handleDepartChange = (e) => {
        setDepart(e.target.value);
    };

    const handleArriveChange = (e) => {
        setArrive(e.target.value);
    };

    const handleDateDepartChange = (e) => {
        setDateDepart(e.target.value);
    };

    const handleDateArriveChange = (e) => {
        setDateArrive(e.target.value);
    };

    const handleSearch = () => {
        const translatedDepart = ville()[depart] || depart;
        const translatedArrive = ville()[arrive] || arrive;
        navigate(`/travel-result?depart=${translatedDepart}&arrive=${translatedArrive}&dateDepart=${dateDepart}&dateArrive=${dateArrive}&adults=${adults}&children=${children}`);
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
                    value={dateDepart}
                    onChange={handleDateDepartChange}
                />
                <input
                    type="date"
                    className="date"
                    value={dateArrive}
                    onChange={handleDateArriveChange}
                />
                <div className="select-container">
                    <div className="select-wrapper">
                        <p>Adults</p>
                        <select value={adults} onChange={(e) => setAdults(parseInt(e.target.value))}>
                            {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select-wrapper">
                        <p>Children</p>
                        <select value={children} onChange={(e) => setChildren(parseInt(e.target.value))}>
                            {[...Array(10)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="search-btn">
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default BodySearch;
