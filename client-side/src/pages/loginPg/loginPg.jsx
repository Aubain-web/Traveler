import { useState } from 'react';
import HeaderCp from '../../componnents/header/headerCp';
import './login.css';

const LoginPg = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const formLog = {
      email,
      password,
    };

    fetch('http://localhost:3001/pages/login/loginPg', {
      method : 'Post',
      mode: 'cors',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(formLog),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error =>{
      console.error('Error : ', error);
    });
  };

  return (
    <div className="login">
      <HeaderCp/>
      <div className="formulaire">
        <form>
          <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" className="username"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" name="username" />
          <br />
          <label htmlFor="pwd">Password:</label>
          <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="pwd" name="pwd" />
        </form>
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPg;
