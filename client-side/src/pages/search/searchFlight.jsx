//import Fetchapi from "../../api/fetch";
import { useState } from 'react';


const Search = () =>{
     const [depart, setDepart] = useState('');
  const [arrive, setArrive] = useState('');
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  
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
 
    return(
        <div className='search'>
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
      <div className="searchbtn">
        <button onClick={""}>
          rechercher
        </button>
      </div>

      <div className='result'>
       <h2> Love </h2>
      </div>

        </div>
    )
}

export default Search;