const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bcrypt = require('bcrypt'); // Import bcrypt
const connectToDatabase = require('./db');
const useRoutes = require('./routes/usersRoutes');
const factureRoutes = require('./routes/facturesRoutes');
const home = require('./routes/homeRoute');
const app = express();
const port = 3001;

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

connectToDatabase();

app.get('/getFlightInfo', async (req, res) => {
   const { departure, arrival, departureDate, returnDate, adults, children } = req.query;
   console.log(req.query);
   const clientId = '2176MGhhwAQUmwCARIyG07bXl2hZDe5p';
   const clientSecret = '3dfexnDupBAMYSkA';

   try {
      const tokenResponse = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      });
      

      if (!tokenResponse.ok) {
         console.log(tokenResponse);
         const errorData = await tokenResponse.json().catch(() => ({}));
         return res.status(tokenResponse.status).json({
            message: 'Failed to obtain access token',
            error: errorData.error_description || 'Unknown error',
         });
      }
      
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;
      console.log(accessToken);

      const flightResponse = await fetch(
         //`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departure}&destinationLocationCode=${arrival}&departureDate=${date}&adults=1&max=2`,
          `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departure}&destinationLocationCode=${arrival}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${adults}&children=${children}&nonStop=false&max=3`,
        //`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LON&destinationLocationCode=NYC&departureDate=2024-11-01&adults=1&max=2`,
         {
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         }
      );
       
      console.log(flightResponse);
      if (!flightResponse.ok) {
         const errorData = await flightResponse.json().catch(() => ({}));
         return res.status(flightResponse.status).json({
            message: `Failed to fetch flight information. Status ${flightResponse.status}`,
            error: errorData.error_description || 'Unknown error',
         });
      }

      const flightInfo = await flightResponse.json();
      res.json(flightInfo);
   } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
   }
});

app.use('/', home);
app.use('/pages/user', useRoutes);
app.use('/user/facture', factureRoutes);

app.listen(port, () => {
   console.log(`Server listening on http://localhost:${port}`);
});
