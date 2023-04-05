import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleSubmit(e){
        e.preventDefault();
        const {email,password}=this.state;
        console.log(email,password);
        fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                "content-type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
              email,
              password,  
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
            if(data.status === "ok"){
                alert("login successful");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);
                window.location.href="./userDetails";
            }
        });
     }
  render() {
    return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100 '>
      <div className='bg-white p-3 rounded w-25'>
      <form onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>
         <div className="d-grid">
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Didn't have a Account <a href="/sign-up"><b>sign up</b></a>
        </p>
      </form>
      </div>
      </div>
    )
  }
}
