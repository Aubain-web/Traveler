import HeaderCp from "../../componnents/header/headerCp.jsx";
import SearchResult from "../../componnents/results/results.jsx";
import { useParams } from "react-router-dom";
import FiltreTravel from "../../componnents/filtre/filtreTravel.jsx";
import { useState } from "react";

const TravelResult = () => {
    const { translatedDepart, translatedArrive, dateDepart, dateArrive, adults, children } = useParams();
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    const handleFilter = (filteredItems) => {
        setFilteredItems(filteredItems);
    };

    return (
        <div>
<<<<<<< HEAD
=======
            <HeaderCp />
            <FiltreTravel items={allItems} setFilteredItems={setFilteredItems} />
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
            <SearchResult
                depart={translatedDepart}
                arrive={translatedArrive}
                dateDepart={dateDepart}
                dateArrive={dateArrive}
                adults={parseInt(adults)}
                children={parseInt(children)}
                setAllItems={setAllItems} filteredItems={filteredItems}
            />
        </div>
    );
}

export default TravelResult;
