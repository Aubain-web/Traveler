import React from 'react';
import "./header.css";
import earthMenuImage from "../../assets/images/earth-menu.svg";
import logoImage from "../../assets/images/logo-no-background.svg";
import { useUser } from "../context2/useContext.jsx";
import { Link } from 'react-router-dom';

const HeaderCp = () => {
    const { user, isLoggedIn, logout } = useUser();
<<<<<<< HEAD
    console.log('User in HeaderCp:', user, isLoggedIn);
=======
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca

    return (
        <div className="contenthead">
            <div className="dropdown">
                <img src={earthMenuImage} alt="dropdown" width="60" />
                <div className="dropdown-content">
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <a onClick={logout}>Se déconnecter</a>
<<<<<<< HEAD
                            <div className="user">Bienvenue, {user?.lastName} !</div>
=======
                            <div className="user">Bienvenue, {user.lastName} !</div>
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
                        </>
                    ) : (
                        <>
                            <Link to="/login">Connexion</Link>
                            <Link to="/signIn">Inscription</Link>
                        </>
                    )}
                </div>
            </div>
            <div className="logo">
                <Link to={"/"}>
                    <img src={logoImage} alt="Logo" width="130" />
                </Link>
            </div>
        </div>
    );
};

export default HeaderCp;
