import React from 'react';
import { useEffect } from 'react';
import "./header.css";
import earthMenuImage from "../../assets/images/earth-menu.svg";
import logoImage from "../../assets/images/logo-no-background.svg";
import { useUser } from "../context/userContext";
import { Link } from 'react-router-dom';

const HeaderCp = () => {
    const { user, logout, isTokenValid } = useUser();
    const lastName = user ? user.lastName : undefined;
    useEffect(() => {
        if (user) {
            // Faites quelque chose avec user.lastName ici
            console.log('lastename',lastName);
        }
    }, [user]);

    return (
        <div className="contenthead">
            <div className="dropdown">
                <img src={earthMenuImage} alt="dropdown" width="60"/>
                <div className="dropdown-content">
                    {user && isTokenValid() ? (
                        <>
                            <p>Email: {user.email}</p>
                            <Link to="/dashboard">Dashboard</Link>
                            <a onClick={logout}>Se déconnecter</a>
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
                <Link to={"/"}>
                    <img src={logoImage} alt="Logo" width="130" />
                </Link>
            </div>
            {user && <div >Bienvenue, {user.firstName} !</div>}
        </div>
    );
};

export default HeaderCp;
