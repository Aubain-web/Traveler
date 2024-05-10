import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';



const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [tokenExpiry, setTokenExpiry] = useState(null);
    const [tokenValidityDuration, setTokenValidityDuration] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = Cookies.get('jwt');
        const storedUserData = localStorage.getItem('userData');

        if (storedToken && storedUserData) {
            const parsedToken = JSON.parse(storedToken);
            const parsedUserData = JSON.parse(storedUserData);
            const { accessToken, expiry } = parsedToken;

            if (accessToken && expiry && new Date(expiry) > new Date()) {
                setUser(parsedUserData);
                setToken(accessToken);
                setTokenExpiry(expiry);
                // Récupérer les informations utilisateur depuis l'API si nécessaire
            } else {
                // Rediriger l'utilisateur vers la page de connexion si le token est expiré
                navigate('/login');
            }
        } else {
            // Rediriger l'utilisateur vers la page de connexion si aucune donnée d'utilisateur n'est disponible
            navigate('/login');
        }
    }, []);

    const login = (userData, tokenData) => {
        const expiry = new Date(new Date().getTime() + tokenData.expires_in * 1000);
        localStorage.setItem('accessToken', JSON.stringify({ accessToken: tokenData.access_token, expiry }));
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.getItem(userData)
        console.log(userData)
        setUser(userData);
        setToken(tokenData.access_token);
        setTokenExpiry(expiry);
        setTokenValidityDuration(tokenData.expires_in);
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        setToken(null);
        setTokenExpiry(null);
        setTokenValidityDuration(null);
    };

    const isTokenValid = () => {
        return tokenExpiry && new Date(tokenExpiry) > new Date();
    };

    return (
        <UserContext.Provider value={{ user, login, token, logout, isTokenValid, tokenValidityDuration }}>
            {children}
        </UserContext.Provider>
    );
};
