import './App.css';
import React, {useState} from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userCredentials, setUserCredentials] = useState({username: "",password: ""});

  function logUserName(event) {
    setUsername(event.target.value);
    if (event.target.value.trim().length === 0)  setUsernameError('Enter User Name');     
    if (event.target.value.trim().length !== 0) {
      setUsernameError('');
      setUserCredentials({...userCredentials, [event.target.name]: event.target.value});      
    }    
  }

  function logPassword(event) {
    setPassword(event.target.value);
    if (event.target.value.trim().length === 0)  setPasswordError('Enter Password'); 
    if (event.target.value.trim().length !== 0)  {
          setPasswordError(''); 
          setUserCredentials({...userCredentials, [event.target.name]: event.target.value});
    }        
  }

  function logUserCredentials(event) { 
    event.preventDefault();
    console.log('userCredentials is', userCredentials);
    if (username && password) setMessage('Welcome User');
  }

  return (
    <div className="row">
      <div className="container">
        React Basic Form
      </div>
      <div className="container">
        <br /><br /><br />
        <form onSubmit={logUserCredentials}> 
          <input type="text" name="username"  placeholder="Enter User Name" onBlur={logUserName}/>
          &nbsp; &nbsp; &nbsp;
          {usernameError && <span style={{color: "blue"}}>{usernameError}</span>}
          <br /><br /><br />
          <input type="text" name="password" placeholder="Enter Password" onBlur={logPassword}/>
          &nbsp; &nbsp; &nbsp;
          {passwordError && <span style={{color: "blue"}}>{passwordError}</span>}
          <br /><br /><br />
          <button type="submit">Submit</button> &nbsp; &nbsp; &nbsp;
          <button type="button" disabled={username && password ? false : true} onClick={logUserCredentials}>Click</button>
        </form>
        <br /><br /><br />
        <div className="container" style={{color: "green"}}>
            {message}
        </div>
      </div>
    </div>
  );
}

export default App;
