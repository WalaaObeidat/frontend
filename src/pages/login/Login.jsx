import "./login.css";

import React, { Component } from 'react';
import axios from "axios";



export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            users:[],
        }
      
    }

    componentDidMount = () =>{
        axios.get("http://localhost:80/frontend/back_end/user.php/users/")
        .then((respone)=>{
            this.setState({
                users:respone.data
            })
            // setUsers(respone.data)
            console.log(respone.data);
        })
    }
    handleBlur = (event)=>{

    const {name , value}=event.target;

if(name==="email"){
    this.setState({
        email:value,
    })
    
}else if(name==="password"){
    this.setState({
        password:value,
    })
    
}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.users);
        if (this.state.email==="" || this.state.password==="" ){
            document.getElementById("err").style.display = 'block'
            document.getElementById("err").innerHTML = "**please inter your email and password"
        }
        this.state.users.map((ele)=>{
        if (ele.email!==this.state.email && ele.password!==this.state.password){
            document.getElementById("err").style.display = 'block'
            document.getElementById("err").innerHTML = "**please inter correct your email and password"
        }
    })
        this.state.users.map((ele)=>{
            if(ele.email===this.state.email && ele.password===this.state.password && this.state.email!=="" && this.state.password !==""){
                  console.log(true);
                  window.localStorage.setItem('email',this.state.email)
                  window.localStorage.setItem('id',ele.id)
                  window.localStorage.setItem('image',ele.image)

                  window.location.assign('/')
                  // window.location.href="http://localhost:3000/home";

                  

            }
         
        })

        
        
        
    }
  render() {
    // {localStorage.getItem('email') ? "" :  window.location.assign('/login')}
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">405 FOUND</h3>
          <span className="loginDesc">
          Connect with friends and the world around you on 405 FOUND.
          </span>
        </div>
        <div className="loginRight" >  
        <form className="loginRight" onSubmit={this.handleSubmit} noValidate >
          <div className="loginBox">
        

            <input  placeholder="Email" className="loginInput" type='email' name='email' onBlur={this.handleBlur} noValidate />
            <input placeholder="Password" className="loginInput" type='password' name='password' onBlur={this.handleBlur} noValidate />
            <button className="loginButton">Log In</button>
            <p className="errorr" id="err"></p>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>

          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
}