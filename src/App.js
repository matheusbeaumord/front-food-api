import React, { useState } from 'react';
import './App.css';
import FoodServices from './services/index';
import axios from 'axios';

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ];

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event.target.username.value;
    const password = event.target.password.value;

    try {
      await axios.post(FoodServices._withBaseUrl('seguranca/login'), {
        login: userName,
        senha: password,
      });
      setIsSubmitted(true);
    } catch (error) {
      setErrorMessages({ name: 'error', message: errors });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = () => (
    <div className='error'>Invalid username / password</div>
  );

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Username </label>
          <input type='text' name='uname' id='username' required />
          {renderErrorMessage()}
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input type='password' name='pass' id='password' required />
          {renderErrorMessage()}
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );

  return (
    <div className='app'>
      <div className='login-form'>
        <div className='title'>Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
