import { useState } from 'react';
import './signIn.css';
import HeaderCp from '../../componnents/header/headerCp';

const SignIn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            password,
        };

        fetch('http://localhost:3001/pages/signin/signIn', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

<<<<<<< HEAD
    return (
        <div className="signIn">
            <div className="formulaire">
                <form>
                    <label htmlFor="fname">Firstname:</label><br />
                    <input type="text" id="fname" name="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
                    <label htmlFor="lname">Lastname:</label><br />
                    <input type="text" id="lname" name="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br /><br />
                    <label htmlFor="email">Email :</label><br />
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <label htmlFor="psw"> Password :</label><br />
                    <input type="text" id="psw" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <div className="button">
                        <input type="submit" value="Submit" onClick={handleSubmit} />
                        <input type="submit" value="Login" />
                    </div>
                </form>
=======
    try {
      const response = await fetch('http://localhost:3001/pages/user/signIn', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();

      toLogin(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toLogin = () => {
    navigate('/login');
  };

  return (
      <div className="signIn">
        <HeaderCp />
        <div className="formulaire">
          <form>
            <label htmlFor="fname">Firstname:</label><br />
            <input type="text" id="fname" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} /><br />
            <label htmlFor="lname">Lastname:</label><br />
            <input type="text" id="lname" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} /><br /><br />
            <label htmlFor="email">Email :</label><br />
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <label htmlFor="psw"> Password :</label><br />
            <input type="text" id="psw" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <div className="button">
              <input type="button" value="Submit" onClick={handleSubmit} />
              <input type="button" value="Login" onClick={toLogin} />
>>>>>>> c9f0fce8d43cc62659d6920659d0ebef1934d5ca
            </div>
        </div>
    );
};

export default SignIn;