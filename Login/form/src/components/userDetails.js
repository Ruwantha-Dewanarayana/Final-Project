import React, {Component} from "react";
import ListVehicleComponent from "./ListVehicleComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default class userDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData:"",
        };
     }
    componentDidMount(){
        fetch("http://localhost:5000/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
                "content-type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
              token:window.localStorage.getItem("token"), 
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userData");
            this.setState({userData: data.data});
        });
    }
    logOut=()=>{
        window.localStorage.clear();
        window.location.href = "./sign-in";
    }
    render(){
        return(
            <div className="bg-transparent vh-100 ">
            <HeaderComponent></HeaderComponent>
            <ListVehicleComponent/>
            <button type="button" onClick={this.logOut} className="btn btn-warning " style={{margin:"10px 10px" }}>Log Out</button>
            <FooterComponent/>
            <br/>
            </div>
        );
    }
}