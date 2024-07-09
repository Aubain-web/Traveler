import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useUser } from "../../componnents/context2/useContext.jsx";
import { useNavigate, Link } from 'react-router-dom';
=======
//import { useUser } from '../../componnents/context/userContext.jsx';
import {useUser} from "../../componnents/context2/useContext.jsx";
import { useNavigate } from 'react-router-dom';
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
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
<<<<<<< HEAD
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

=======
            console.log('userId dashboard :', user._id);
            try {
                const response = await fetch(`http://localhost:3001/pages/user/${user._id}`);
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
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
<<<<<<< HEAD
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
=======
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                {userData && (
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                    <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                        <img src={utilisateur}
                                             alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                             style={{ width: '150px', zIndex: '1' }} />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark d-flex align-items-center justify-content-center w-75 px-4 py-2"
                                            data-mdb-ripple-color="dark"
                                            style={{ zIndex: '1', whiteSpace: 'nowrap' }}
                                        >
                                            Edit profile
                                        </button>

                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <h5>{userData.lastName}</h5>
                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <Link to='/' style={{textDecoration : "none", color : "white", cursor : "pointer"}}> Accueil </Link>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div className="px-3">
                                            <p className="mb-1 h5">Factures</p>
                                            <p className="small text-muted mb-0">Facture count</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                            <p className="font-italic mb-1">Prénom : {userData.firstName}</p>
                                            <p className="font-italic mb-1">Nom : {userData.lastName}</p>
                                            <p className="font-italic mb-0">email : {userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Votre historique</p>
                                        <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                    </div>

                                </div>
                                <button className="btn btn-outline-dark d-flex align-items-center justify-content-center w-25 mb-3 ms-3 px-4 py-2"
                                        data-mdb-ripple-color="dark"
                                        style={{ zIndex: '1', whiteSpace: 'nowrap' }} onClick={logout}>déconnexion</button> {/* Bouton de déconnexion */}
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
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
