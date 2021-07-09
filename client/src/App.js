import React, {useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername,setLoginUsername] = useState("")
  const [loginPassword,setLoginPassword] = useState("")
  const register = () => {
    axios({
      method: "POST",
      data: 
      {registerUsername,
      registerPassword   
    },
    withCredentials:true,
    url: "http://localhost:2000/register",
    }).then((res) => console.log(res));
  }
  const login = () => {
    axios({
      method: "POST",
      data: 
      {loginUsername,
        loginPassword   
      },
      withCredentials:true,
    url: "http://localhost:2000/login",
    }).then((res) => console.log(res));
  }
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials:true,
    url: "http://localhost:2000/getUser",
    }).then((res) => console.log(res));
  }

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}></input>
        <input placeholder="password"onChange={e => setRegisterPassword(e.target.value)}></input>
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder="username"onChange={e => setLoginUsername(e.target.value)}></input>
        <input placeholder="password"onChange={e => setLoginPassword(e.target.value)}></input>
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>GetUser</h1>
        <button onClick={getUser}>Submit</button>
      </div>
    </div>
  );
}

export default App;
