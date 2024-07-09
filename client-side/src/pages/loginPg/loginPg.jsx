import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../componnents/context2/useContext.jsx";
import HeaderCp from "../../componnents/header/headerCp.jsx";
import './login.css';

const LoginPg = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
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
            const { token, expiryDate, user } = data;

            if (token) {
                login({ token, expiryDate, user });
                navigate('/');
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
            <div className="formulaire">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <label htmlFor="username">Username:</label>
                    <br />
                    <input type="text" className="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" name="username" />
                    <br />
                    <label htmlFor="pwd">Password:</label>
                    <br />
                    <input type="password" placeholder="mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="pwd" name="pwd" />
                    {error && <p className="error">{error}</p>}
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
                <div className="option">
                    <p>
                        <a
                            style={{
                                color: 'red',
                                fontWeight: 'bold',
                                fontSize: '1.2em',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                textDecoration: 'none'
                            }}
                            onClick={() => { navigate('/signin') }}
                        >
                            Vous n'avez pas de compte ?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPg;
