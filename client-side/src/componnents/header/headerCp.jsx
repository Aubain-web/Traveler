import React from 'react';
import "./header.css";
import earthMenuImage from "../../assets/images/earth-menu.svg";
import logoImage from "../../assets/images/logo-no-background.svg";
import { useUser } from "../context2/useContext.jsx";
import { Link } from 'react-router-dom';

const HeaderCp = () => {
    const { user, isLoggedIn, logout } = useUser();
    console.log('User in HeaderCp:', user, isLoggedIn);

    return (
        <div className="contenthead">
            <div className="dropdown">
                <img src={earthMenuImage} alt="dropdown" width="60" />
                <div className="dropdown-content">
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <a onClick={logout}>Se déconnecter</a>
                            <div className="user">Bienvenue, {user?.lastName} !</div>
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
