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
        Cookies.set('jwt', token);
        localStorage.setItem('userData', JSON.stringify({ token, expiryDate, user }));
        setUser(user);
        console.log(user)
        console.log('userId :', user._id);
        setIsLoggedIn(true);
        navigate('/dashboard');
    };

    // Fonction de déconnexion
    const logout = async () => {
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
    };

    // Vérifier si le token est expiré à l'initialisation
    useEffect(() => {
        if (storedUser && Date.now() >= storedUser.expiryDate) {
            logout();
        }
    }, []);

    // Vérifier régulièrement si le token est expiré
    useEffect(() => {
        const interval = setInterval(() => {
            const storedUser = JSON.parse(localStorage.getItem('userData'));
            if (storedUser && Date.now() >= storedUser.expiryDate) {
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
