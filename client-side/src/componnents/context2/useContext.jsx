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
<<<<<<< HEAD
        //conditions de vérification pour les informations utilisateur
        Cookies.set('jwt', token);
        localStorage.setItem('userData', JSON.stringify({ token, expiryDate, user }));
        setUser(user);
        setIsLoggedIn(true);
        console.log('is loged ?', user,isLoggedIn );
=======
        Cookies.set('jwt', token);
        localStorage.setItem('userData', JSON.stringify({ token, expiryDate, user }));
        setUser(user);
        console.log(user)
        console.log('userId :', user._id);
        setIsLoggedIn(true);
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
        navigate('/dashboard');
    };

    // Fonction de déconnexion
    const logout = async () => {
<<<<<<< HEAD
        localStorage.clear();
        Cookies.remove('jwt');
        setUser(null);
        setIsLoggedIn(false);
        navigate('/');
=======
        try {
            const response = await fetch('http://localhost:3001/pages/user/logout', {
                method: 'GET',
                credentials: 'include', // Inclure les cookies dans la requête
            });

            if (!response.ok) {
                throw new Error('Failed to log out');
            }

            Cookies.remove('jwt');
            localStorage.removeItem('userData');
            setUser(null);
            setIsLoggedIn(false);
            navigate('/login');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
    };

    // Vérifier si le token est expiré à l'initialisation
    useEffect(() => {
<<<<<<< HEAD
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
=======
        if (storedUser && Date.now() >= storedUser.expiryDate) {
            logout();
        }
    }, []);

    // Vérifier régulièrement si le token est expiré
    useEffect(() => {
        const interval = setInterval(() => {
            const storedUser = JSON.parse(localStorage.getItem('userData'));
            if (storedUser && Date.now() >= storedUser.expiryDate) {
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
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
