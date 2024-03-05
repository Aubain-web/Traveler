const Fetchapi = async () => {
  const url =
    "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=%3CREQUIRED%3E&pageNo=1&adults=1&children=0%2C17&currency_code=AED";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "36b5dc62c2msh13685c7e0023364p18ce45jsnf9d0d32c53e6",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
export default Fetchapi;
