import React, { useState } from 'react'

function Login() {

    const [userCredentials, setUserCredentials] = useState({ username: "", password: "" });

    const onInputChange = (event) => {
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
      };


      const onSubmit = (e) => {      
        e.preventDefault();        
        let loginRequest = JSON.stringify(userCredentials);
        console.log('loginRequest is',loginRequest);
        let myHeaders= {'Content-Type': 'application/json'};
        let myUrl = 'http://localhost:8080/getJWTToken'    
        let option = {method: "POST", headers: myHeaders , body: loginRequest};
        fetch(myUrl, option).then(resp => resp.text()).then((logoutResponse)=>console.log(logoutResponse));
    }  

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>User Name:</td>
                            <td><input type='text' name='username' onChange={event => onInputChange(event)}/></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type='text' name='password' onChange={event => onInputChange(event)}/></td>
                        </tr>
                        <tr>
                            <td>Submit:</td>
                            <td><input type='submit' name='submit' /></td>
                        </tr>
                    </tbody>                    
                </table>
            </form>
        </div>
    )
}

export default Login