import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/userAction";
// import { loginUser } from "../REDUX/Actions/userActions";

const Login = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const handleClickShowPassword = () => setShowPassword(!showPassword);
  //   const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const loginState = useSelector((state) => state.loginUserReducer);
  //   const { loading, success, error } = loginState;

  const handleLogin = (e) => {
    e.preventDefault();
    const currentUser = {
      user_email: email,
      user_password: password,
    };

    console.log(currentUser);
    if (email === "" || password === "") {
      alert("Please fill details courectly");
    } else {
      dispatch(loginUser(currentUser));
    }
  };

  //   useEffect(() => {
  //     if (localStorage.getItem("currentUser")) {
  //       navigate("/");
  //     }
  //   }, []);

  return (
    <div>
      <form action="">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
