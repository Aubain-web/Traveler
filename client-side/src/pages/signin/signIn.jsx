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
        console.log(data); // handle response
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="signIn">
      <HeaderCp/>
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
      </div>
    </div>
  );
};

export default SignIn;
