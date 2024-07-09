import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './modalComponent.css';
import { useUser } from "../context2/useContext.jsx";
import TimePeriod from "../../duréVol/timePeriod.jsx";
import AircraftDictionary from "../../dictionnaire-aircraft/airCraftCode.jsx";
import CompagnieCarrier from "../../dictionnaire-carier/carierCode.jsx";
import ville from "../../dictionaire-ville/villeConv.jsx";
import AirportCode from "../../aeroportCode/aeroportCode.jsx";
import Cookies from "js-cookie";

const ModalComponent = ({ flight, open, onClose }) => {
    const { user, isLoggedIn} = useUser();
    const token = Cookies.get('jwt');
    //const userId = user._id;
    const compagnieAerienne = CompagnieCarrier()[flight.itineraries[0].segments[0].carrierCode];
    console.log(compagnieAerienne);
    const aeroportArrivee = AirportCode()[flight.itineraries[0].segments[0].arrival.iataCode];
    const aeroportDepart = AirportCode()[flight.itineraries[0].segments[0].departure.iataCode];
    const dureAller = TimePeriod()[flight.itineraries[0].duration];

    if (!flight) {
        return null;
    }

    const retourSegment = flight.itineraries[1]?.segments[0];
    const compagnieAerienneRetour = retourSegment ? CompagnieCarrier()[retourSegment.carrierCode] : null;
    const aeroportDepartRetour = retourSegment ? AirportCode()[retourSegment.departure.iataCode] : null;
    const aeroportArriveeRetour = retourSegment ? AirportCode()[retourSegment.arrival.iataCode] : null;
    const dureRetour =  TimePeriod()[flight.itineraries[1].duration];



    const handlePayment = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            alert("Vous devez vous connecter pour effectuer un paiement.");
            return;
        }

        const infoLog = {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            adults: flight.travelerPricings.filter(tp => tp.travelerType === "ADULT").length,
            children : flight.travelerPricings.filter(tp => tp.travelerType === "CHILD").length,
            compagnieAerienne: compagnieAerienne,
            aeroportDepart: aeroportDepart,
            aeroportArrivee: aeroportArrivee,
            dateDepart: flight.itineraries[0].segments[0].departure.at.split('T')[0], // Extraire la date
            heureDepart: flight.itineraries[0].segments[0].departure.at.split('T')[1], // Extraire l'heure
            dateArrivee: flight.itineraries[0].segments[0].arrival.at.split('T')[0], // Extraire la date
            heureArrivee: flight.itineraries[0].segments[0].arrival.at.split('T')[1], // Extraire l'heure
            numeroSiege: "12A",
            classe: flight.travelerPricings[0].fareDetailsBySegment[0].cabin,
            montantPaye: parseFloat(flight.price.total),
            devise: flight.price.currency,
            taxes: parseFloat(flight.price.totalTaxes || 0), // Converti en nombre
            fraisSupplementaires: 0,
            instructionsVoyage: "Aucune",


            // Ajout des informations du vol retour
            compagnieAerienneRetour: compagnieAerienneRetour,
            aeroportDepartRetour: aeroportDepartRetour,
            aeroportArriveeRetour: aeroportArriveeRetour,
            dateDepartRetour: retourSegment ? retourSegment.departure.at.split('T')[0] : null,
            heureDepartRetour: retourSegment ? retourSegment.departure.at.split('T')[1] : null,
            dateArriveeRetour: retourSegment ? retourSegment.arrival.at.split('T')[0] : null,
            heureArriveeRetour: retourSegment ? retourSegment.arrival.at.split('T')[1] : null,
            dureeAller: dureAller,
            dureeRetour: dureRetour
        };
        //console.log('Request Body:', JSON.stringify(infoLog, null, 2));

        try {
            const response = await fetch('http://localhost:3001/user/facture/create', {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.trim()}`,
                },
                body: JSON.stringify(infoLog),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response data:', errorData);
                throw new Error('Failed to create invoice');
            }

            const data = await response.json();
            //console.log('response : ', data);

            alert('Votre facture a bien été créée, vous pouvez vous rendre dans votre dashboard !');
            onClose(); // Ferme le modal après le paiement
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box className="modal-box">
                <div className="modal-details">
                    <h2 id="modal-title">Détails du billet</h2>
                    <table>
                        <tbody>
                        {  isLoggedIn &&
                            (
                                <>
                                    <tr>
                                    <td>ID:</td>
                                    <td>{flight.id}</td>
                                </tr>
                                </>
                            )
                        }
                        <tr>
                            <td>Compagnie Aérienne:</td>
                            <td>{compagnieAerienne}</td>
                        </tr>
                        {isLoggedIn && (
                            <>
                                <tr>
                                    <td>Nom:</td>
                                    <td>{user.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Prénom:</td>
                                    <td>{user.firstName}</td>
                                </tr>
                            </>
                        )}
                        <tr>
                            <td>Adulte(s):</td>
                            <td>{flight.travelerPricings.filter(tp => tp.travelerType === "ADULT").length}</td>
                        </tr>
                        <tr>
                            <td>Prix:</td>
                            <td>{flight.price.total} {flight.price.currency}</td>
                        </tr>
                        <tr>
                            <td> classe :</td>
                            <td> {flight.travelerPricings[0].fareDetailsBySegment[0].cabin} </td>
                        </tr>
                        <tr>
                            <td>Aller</td>
                        </tr>
                        <tr>
                            <td>Aéroport de départ:</td>
                            <td>{aeroportDepart}</td>
                        </tr>
                        <tr>
                            <td>Départ:</td>
                            <td>{flight.itineraries[0].segments[0].departure.at}</td>
                        </tr>
                        <tr>
                            <td>Aéroport d'arrivée:</td>
                            <td>{aeroportArrivee}</td>
                        </tr>
                        <tr>
                            <td>Date d'arrivée:</td>
                            <td>{flight.itineraries[0].segments[0].arrival.at}</td>
                        </tr>
                        <tr>
                            <td>Durée aller:</td>
                            <td>{dureAller}</td>
                        </tr>
                        {retourSegment && (
                            <>
                                <tr>
                                    <td>Retour</td>
                                </tr>
                                <tr>
                                    <td>Compagnie Aérienne:</td>
                                    <td>{compagnieAerienneRetour}</td>
                                </tr>
                                <tr>
                                    <td>Aéroport de départ:</td>
                                    <td>{aeroportDepartRetour}</td>
                                </tr>
                                <tr>
                                    <td>Départ:</td>
                                    <td>{retourSegment.departure.at}</td>
                                </tr>
                                <tr>
                                    <td>Aéroport d'arrivée:</td>
                                    <td>{aeroportArriveeRetour}</td>
                                </tr>
                                <tr>
                                    <td>Date d'arrivée:</td>
                                    <td>{retourSegment.arrival.at}</td>
                                </tr>
                                <tr>
                                    <td>Durée retour:</td>
                                    <td>{dureRetour}</td>
                                </tr>
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className='option'>
                    <Button
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            width: '100%',
                            backgroundColor: '#1976d2',
                            color: '#fff',
                            borderRadius: 8,
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '10px 20px',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}
                        onClick={handlePayment}
                    >
                        Payer
                    </Button>
                    <Button
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            width: '100%',
                            backgroundColor: '#f44336',
                            color: '#fff',
                            borderRadius: 8,
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '10px 20px',
                            textAlign: 'center'
                        }}
                        onClick={onClose}
                    >
                        Annuler
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
