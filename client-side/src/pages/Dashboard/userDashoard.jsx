import React, { useState, useEffect } from 'react';
import { useUser } from "../../componnents/context2/useContext.jsx";
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userDashboard.css';
import utilisateur from '../../assets/icons/utilisateur.png';
import Cookies from "js-cookie";
import { Modal, Button } from 'react-bootstrap';

const UserDashboard = () => {
    const { user, logout } = useUser();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedFacture, setSelectedFacture] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const token = Cookies.get('jwt')?.trim();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!token) {
                setError('Token invalide ou expiré.');
                return;
            }

            try {
                const response = await fetch('http://localhost:3001/user/facture/getFacture', {
                    method: 'GET',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError(errorData.message || 'Failed to fetch user data');
                    return;
                }

                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                setError('Error fetching user data: ' + error.message);
            }
        };

        if (user) {
            fetchUserData();
        }
    }, [user, token]);

    const handleShowModal = (facture) => {
        setSelectedFacture(facture);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedFacture(null);
        setShowModal(false);
    };

    const WelcomPage = () => {
        navigate('/');
    }

    return (
        <div className="container py-5">
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {userData && (
                <div className="custom-card-container">
                    <div className="card shadow-lg custom-card">
                        <div className="card-header profile-header d-flex align-items-center">
                            <img src={utilisateur} alt="Profile" className="profile-img rounded-circle" />
                            <div className="profile-info">
                                <h5>{user.lastName}</h5>
                                <p>{user.email}</p>
                            </div>
                            <div className="retour" onClick={WelcomPage}>
                                <h4>Page d'accueil</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Informations utilisateur</h5>
                            <p className="card-text">Prénom : {user.firstName}</p>
                            <p className="card-text">Nom : {user.lastName}</p>
                            <p className="card-text">Email : {user.email}</p>
                            <hr />
                            <h5 className="card-title">Votre historique</h5>
                            {userData.length > 0 ? (
                                <ul className="list-group">
                                    {userData.map((facture, index) => (
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                            key={index}
                                            onClick={() => handleShowModal(facture)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Facture : {facture.montantPaye} {facture.devise}
                                            <span className="badge bg-primary rounded-pill">Voir</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted">Aucun enregistrement trouvé</p>
                            )}
                            <Button variant="outline-dark" className="mt-4 logout-btn" onClick={logout}>
                                Déconnexion
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails de la Facture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedFacture ? (
                        <div>
                            <p><strong>Montant Payé:</strong> {selectedFacture.montantPaye} {selectedFacture.devise}</p>
                            <p><strong>Prénom:</strong> {selectedFacture.firstName}</p>
                            <p><strong>Nom:</strong> {selectedFacture.lastName}</p>
                            <p><strong>Email:</strong> {selectedFacture.email}</p>
                            <p><strong>Départ allé:</strong> {selectedFacture.aeroportDepart}</p>
                            <p><strong>Arrivée allé:</strong> {selectedFacture.aeroportArrivee}</p>
                            <p><strong>Départ retour:</strong> {selectedFacture.dateDepartRetour.split('T')[0]}</p>
                            <p><strong>Arrivée retour:</strong> {selectedFacture.dateArriveeRetour.split('T')[0]}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserDashboard;
