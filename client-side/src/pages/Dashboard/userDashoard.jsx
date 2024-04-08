import React, { useState, useEffect } from 'react';
import { useUser } from '../../componnents/context/userContext.jsx';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userDashboard.css';
import utilisateur from '../../assets/icons/utilisateur.png';
import { Link } from 'react-router-dom';


const UserDashboard = () => {
    const { user, setUser, logout } = useUser();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/pages/user/${user.userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const userData = await response.json();
                setUserData(userData);
                console.log(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (user) {
            fetchUserData();
        }
    }, [user]);


    return (
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
                                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: '1' }}>
                                            Edit profile
                                        </button>
                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <h5>{userData.lastName}</h5>
                                    </div>
                                    <div className="ms-3" style={{ marginTop: '130px' }}>
                                        <Link to='/'>Accueil</Link>
                                    </div>
                                </div>
                                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p className="mb-1 h5">253</p>
                                            <p className="small text-muted mb-0">Photos</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-1 h5">1026</p>
                                            <p className="small text-muted mb-0">Followers</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 h5">478</p>
                                            <p className="small text-muted mb-0">Following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                            <p className="font-italic mb-1">firstName : {userData.firstName}</p>
                                            <p className="font-italic mb-1">lastName : {userData.lastName}</p>
                                            <p className="font-italic mb-0">email : {userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Votre historique</p>
                                        <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                 alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col mb-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                 alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                 alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                 alt="image 1" className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={logout}>Logout</button> {/* Bouton de déconnexion */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default UserDashboard;
