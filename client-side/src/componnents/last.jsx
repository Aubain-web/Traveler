// last.jsx
import { useEffect, useState } from "react";

const Last = () => {
  const [flightData, setFlightData] = useState(null);
  const [depart, setDepart] = useState("");
  const [arrive, setArrive] = useState("");
  const [date1, setDate1] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFlightInfo = async () => {
      const clientId = "2176MGhhwAQUmwCARIyG07bXl2hZDe5p";
      const clientSecret = "3dfexnDupBAMYSkA";

      try {
        // Obtenez l'access token
        const tokenResponse = await fetch(
          "https://test.api.amadeus.com/v1/security/oauth2/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
          }
        );

        if (!tokenResponse.ok) {
          throw new Error("Échec de l'obtention du jeton d'accès");
        }

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        // Utilisez l'access token pour faire une requête à l'API d'Amadeus
        const flightResponse = await fetch(
          `https://test.api.amadeus.com/v2/some/flight/endpoint?departure=${depart}&arrival=${arrive}&date=${date1}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!flightResponse.ok) {
          throw new Error(
            `Échec de la récupération des informations sur le vol. Statut ${flightResponse.status}`
          );
        }

        const flightInfo = await flightResponse.json();
        setFlightData(flightInfo);
      } catch (error) {
        setError(error.message);
        console.error("Erreur lors de la récupération des données du vol:", error);
      }
    };

    getFlightInfo();
  }, [depart, arrive, date1]);

  const handleDepartChange = (e) => setDepart(e.target.value);
  const handleArriveChange = (e) => setArrive(e.target.value);
  const handleDateChange = (e) => setDate1(e.target.value);

  return (
    <div>
      <h1>Votre composant React</h1>
      <input type="text" value={depart} onChange={handleDepartChange} />
      <input type="text" value={arrive} onChange={handleArriveChange} />
      <input type="date" value={date1} onChange={handleDateChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {flightData && (
        <div>
          <h2>Informations sur le vol</h2>
          {/* Affichez les informations sur le vol ici */}
        </div>
      )}
    </div>
  );
};

export default Last;
