import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const GuestPage = () => {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });

  const [tokenData, setTokenData] = useState('');
  const navigate = (useNavigate)

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleClick() {
    setTokenData(`${loginData.login}${loginData.password}`);
    setLoginData({
      login: "",
      password: "",
    });
  }

  useEffect(() => {
    if(tokenData.length){
        localStorage.setItem("loginToken", JSON.stringify(tokenData));
        window.location.reload()
    }
  }, [tokenData]);
  
  return (
    <div className="loginPage">
      <h2>Guest Page</h2>
      <div className="loginContainer">
        <div className="inputDiv">
          <label>
            <input
              type="text"
              placeholder="Login"
              name="login"
              value={loginData.login}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="inputDiv">
          <label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};
