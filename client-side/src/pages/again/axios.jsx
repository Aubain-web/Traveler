import axios from 'axios';


const URL = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights';
export const GetFlight = async() =>{
    try {
       const {data: {data}} = await axios.get(URL, options);

       return data;
    }catch(error) {
        console.log(error);

    }

}

const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
  params: {
    fromId: 'BOM.AIRPORT',
    toId: 'DEL.AIRPORT',
    departDate: '<REQUIRED>',
   
   
  },
  headers: {
    'X-RapidAPI-Key': '36b5dc62c2msh13685c7e0023364p18ce45jsnf9d0d32c53e6',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};

