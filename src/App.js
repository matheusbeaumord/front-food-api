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
    //Prevent page reload
    event.preventDefault();
    const userName = event.target.username.value;
    console.log(
      '🚀 ~ file: App.js ~ line 31 ~ handleSubmit ~ userName',
      userName
    );
    const password = event.target.password.value;
    console.log(
      '🚀 ~ file: App.js ~ line 33 ~ handleSubmit ~ password',
      password
    );

    try {
      const loginRequest = await axios.post(
        FoodServices._withBaseUrl('seguranca/login'),
        {
          body: {
            login: userName,
            senha: password,
          },
        }
      );
      console.log(loginRequest);
    } catch (error) {
      console.log('🚀 ~ file: App.js ~ line 37 ~ handleSubmit ~ error', error);
    }

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: 'pass', message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: 'uname', message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Username </label>
          <input type='text' name='uname' id='username' required />
          {renderErrorMessage('uname')}
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input type='password' name='pass' id='password' required />
          {renderErrorMessage('pass')}
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
