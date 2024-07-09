import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    // Récupération des données de l'utilisateur depuis localStorage
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    const defaultUser = storedUser ? storedUser.user : null;
    const defaultIsLoggedIn = storedUser ? Date.now() < storedUser.expiryDate : false;

    const [user, setUser] = useState(defaultUser);
    const [isLoggedIn, setIsLoggedIn] = useState(defaultIsLoggedIn);

    // Fonction de connexion
    const login = (userData) => {
        const { token, expiryDate, user } = userData;
        //conditions de vérification pour les informations utilisateur
        Cookies.set('jwt', token);
        localStorage.setItem('userData', JSON.stringify({ token, expiryDate, user }));
        setUser(user);
        setIsLoggedIn(true);
        console.log('is loged ?', user,isLoggedIn );
        navigate('/dashboard');
    };

    // Fonction de déconnexion
    const logout = async () => {
        localStorage.clear();
        Cookies.remove('jwt');
        setUser(null);
        setIsLoggedIn(false);
        navigate('/');
    };

    // Vérifier si le token est expiré à l'initialisation
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userData'));
        if (storedUser) {
            const { token, expiryDate, user } = storedUser;
            if (Date.now() < expiryDate) {
                setUser(user);
                setIsLoggedIn(true);
            } else {
                logout();
            }
        }
    }, []);
    // Vérifier  si le token est expiré
    useEffect(() => {
        const interval = setInterval(() => {
            const storedUser = JSON.parse(localStorage.getItem('userData'));
            if (storedUser && Date.now() >= storedUser.expiryDate)  {
                logout();
            }
        }, 60000); // Vérifie toutes les 60 secondes

        return () => clearInterval(interval);
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
