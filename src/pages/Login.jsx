import React from "react";
import loginImg from "../assets/login.png"
import Template from "../components/Template";
const Login = ({setIsLoggedIn}) => {
  return(
      <Template
       title="Welcome Back"
       desc1="Built skills for today,tomorrow,and beyond."
       desc2="Education to future-proff your Career."
       image={loginImg}
       fromtype="login"
       setIsLoggedIn={setIsLoggedIn}
      />
  )
}
export default Login
