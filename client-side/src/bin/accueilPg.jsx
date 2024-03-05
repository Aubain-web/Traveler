/*import { Carousel } from 'antd';
import { useState } from 'react';

const Accueil = () => {
  const contentStyles = [
    // ... (unchanged)
  ];

  const [depart, setDepart] = useState('');
  const [arrive, setArrive] = useState('');
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleDepartChange = (e) => {
    setDepart(e.target.value);
  };

  const handleArriveChange = (e) => {
    setArrive(e.target.value);
  };

  const handleDate1Change = (e) => {
    setDate1(e.target.value);
  };

  const handleDate2Change = (e) => {
    setDate2(e.target.value);
  };

  const searchFlights = () => {
    // Implement your flight search logic here
    setShowResults(true);
  };

  return (
    <>
      <Carousel autoplay>
        {contentStyles.map((style, index) => (
          <div key={index} style={style}>
            <h3>the world is yours {index + 1}</h3>
          </div>
        ))}
      </Carousel>
      <input
        type='text'
        className='depart'
        placeholder='depart'
        value={depart}
        onChange={handleDepartChange}
      />
      <input
        type='text'
        className='arrive'
        placeholder='arrive'
        value={arrive}
        onChange={handleArriveChange}
      />
      <input
        type='datetime-local'
        className='date de depart'
        value={date1}
        onChange={handleDate1Change}
      />
      <input
        type='datetime-local'
        className='date de depart'
        value={date2}
        onChange={handleDate2Change}
      />
      <div className="search">
        <button onClick={searchFlights}>
          rechercher
        </button>
      </div>
      {showResults && (
        <div className="search-results">
          {/* Display search results here }
          <p>Search results will be displayed here.</p>
        </div>
      )}
    </>
  );
};

export default Accueil;*/
