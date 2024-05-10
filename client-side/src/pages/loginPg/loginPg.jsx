import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../../componnents/context/userContext.jsx";
import HeaderCp from "../../componnents/header/headerCp.jsx";
import './login.css';

const LoginPg = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [data, setData] = useState();
    const { login } = useUser();


    const handleLogin = async (e) => {
        e.preventDefault();

        const formLog = {
            email,
            password,
        };

        try {
            const response = await fetch('http://localhost:3001/pages/user/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formLog),
            });

            if (!response.ok) {
                throw new Error('Failed to log in');
            }

            const data = await response.json();
            const token = data.token;
            setData(data);
            if (token) {
                login(data, token); // Mettre à jour l'état d'authentification de votre application avec les données utilisateur si nécessaire
                console.log(data.user.lastName)
                navigate('/'); // Rediriger l'utilisateur vers la page principale après la connexion
            } else {
                console.error('Token not found in response');
            }
        } catch (error) {
            console.error('Error : ', error);
            setError('Identifiant ou mot de passe incorrect');
        }
    }

    return (
        <div className="login">
            <HeaderCp />
            <div className="formulaire">
                <form>
                    <h2>Login</h2>
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input type="text" className="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" name="username" />
                    <br />
                    <label htmlFor="pwd">Password:</label>
                    <br />
                    <input type="password" placeholder="mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="pwd" name="pwd" />
                    {error && <p className="error">{error}</p>}
                </form>
                <div className="option">
                    <button onClick={handleLogin}>
                        Login
                    </button>
                    <p>
                        <a style={{ color: 'red' }} onClick={()=>{navigate('/signin')}}> Vous n'avez pas de compte ?</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPg;
