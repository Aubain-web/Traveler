import axios from 'axios';

const Config =async () =>{
const options = {
  method: 'GET',
  url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
  params: {
    fromId: 'BOM.AIRPORT',
    toId: 'DEL.AIRPORT',
    departDate: '2023-12-22',
    pageNo: '1',
    adults: '1',
    children: '0,17',
    currency_code: 'AED'
  },
 headers: {
    'X-RapidAPI-Key': '36b5dc62c2msh13685c7e0023364p18ce45jsnf9d0d32c53e6',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

}

export default Config;