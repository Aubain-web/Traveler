import React, { useEffect, useState } from 'react';
import "./header.css";
import earthMenuImage from "../../assets/images/earth-menu.svg";
import logoImage from "../../assets/images/logo-no-background.svg";
import { useUser } from "../context/userContext";
import { Link } from 'react-router-dom';


const HeaderCp = () => {
    const { user, logout } = useUser();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (user) {
            console.log("Nom de l'utilisateur:", user.userId);
            const userInfoId = user.userId;
            // Fetch des infos utilisateur à partir de l'API
            fetch(`http://localhost:3001/pages/user/${userInfoId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
                    return response.json();
                })
                .then(userData => {
                    console.log("Données utilisateur récupérées avec succès:", userData);
                    setUserInfo(userData);
                    // Effectuez ici les actions nécessaires avec les données utilisateur récupérées
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données utilisateur:', error);
                });
        }
    }, [user]); // Exécuter l'effet chaque fois que l'utilisateur change

    return (
        <div className="contenthead">
            <div className="dropdown">
                <img src={earthMenuImage} alt="dropdown" width="60"/>
                <div className="dropdown-content">
                    {user ? (
                        <>
                            {userInfo ? (
                                <>
                                    <p>Email: {userInfo.email}</p>
                                    <Link to="/dashboard">Dashboard</Link>
                                    <a onClick={logout}>Se déconnecter</a>
                                </>
                            ) : (
                                <p>Chargement des données utilisateur...</p>
                            )}
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signIn">Sign In</Link>
                            <a href="#">Link 3</a>
                        </>
                    )}
                </div>
            </div>
            <div className="logo">
                <img src={logoImage} alt="Logo" width="130" />
            </div>
            {user && userInfo && (
                <div className="user">
                    <h3>{userInfo.lastName}</h3>
                </div>
            )}
        </div>
    );
};

export default HeaderCp;
