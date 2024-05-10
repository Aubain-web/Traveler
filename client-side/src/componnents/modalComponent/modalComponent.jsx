// Dans ModalComponent.js
import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './modalComponent.css';
import {useUser} from "../context/userContext.jsx";

const ModalComponent = ({ flight, open, onClose }) => {
    const { user, logout, token, isTokenValid } = useUser();
    //const [invoiceData, setInvoiceData] = useState(null);
    if (!flight) {
        return null; // chargement en cours si nécessaire
    }

    console.log('id :', flight.id);
    const handlePayment = async(e) => {

    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                width: 400,
                backgroundColor: '#fff',
                borderRadius: 8,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                textAlign: 'center'
            }}>
                <div className="modal-details">
                    <h2 id="modal-title">Détails du billet</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>ID:</td>
                            <td>{flight.id}</td>
                        </tr>
                        <tr>
                            <td>Aircraft Code:</td>
                            <td>{flight.itineraries[0].segments[0].aircraft.code}</td>
                        </tr>
                        <tr>
                            <td>Adult(s):</td>
                            <td>{flight.travelerPricings.filter(tp => tp.travelerType === "ADULT").length}</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>{flight.price.total} {flight.price.currency}</td>
                        </tr>
                        <tr>
                            <td>Base:</td>
                            <td>{flight.price.base}</td>
                        </tr>
                        <tr>
                            <td>Departure Airport:</td>
                            <td>{flight.itineraries[0].segments[0].departure.iataCode}</td>
                        </tr>
                        <tr>
                            <td>Departure Time:</td>
                            <td>{flight.itineraries[0].segments[0].departure.at}</td>
                        </tr>
                        <tr>
                            <td>Arrival Airport:</td>
                            <td>{flight.itineraries[0].segments[0].arrival.iataCode}</td>
                        </tr>
                        <tr>
                            <td>Arrival Time:</td>
                            <td>{flight.itineraries[0].segments[0].arrival.at}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='option'>
                <Button  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 400,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    textAlign: 'center'
                }}
                         onClick={handlePayment}>Payer</Button>
                <Button sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 400,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    textAlign: 'center'
                }}
                        onClick={onClose}>Annuler</Button></div>
            </Box>
        </Modal>
    );
};


export default ModalComponent;
