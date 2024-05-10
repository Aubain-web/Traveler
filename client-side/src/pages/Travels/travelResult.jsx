import HeaderCp from "../../componnents/header/headerCp.jsx";
import SearchResult from "../../componnents/results/results.jsx";
import {useParams} from "react-router-dom";
import FiltreTravel from "../../componnents/filtre/filtreTravel.jsx";
import {useState} from "react";


const TravelResult = () => {
    const { translatedDepart, translatedArrive, dateDepart, dateArrive, adults, children } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);

    const handleFilter = (filteredItems) => {
        setFilteredItems(filteredItems);
    };

    // Récupérer les éléments filtrés à partir de l'état filteredItems
    const travelItems = filteredItems;

    return(
        <div>
            <HeaderCp/>
            <FiltreTravel onFilter={handleFilter}/>
            <SearchResult depart={translatedDepart}
                          arrive={translatedArrive}
                          dateDepart={dateDepart}
                          dateArrive={dateArrive}
                          adults={parseInt(adults)}
                          children={parseInt(children)}
                          items={travelItems}
            />
        </div>
    )
}
export default TravelResult;