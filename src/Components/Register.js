import React from 'react';
import ReactDOM from "react-dom";
import Swal from 'sweetalert2';
import "../Design.css"
import RightLink from "./RightLink.js"
const axios=require('axios');

class Register extends React.Component
{
	constructor(props)
	{
		super(props)
		this.Registerfunction=this.Registerfunction.bind(this)
		this.render=this.render.bind(this)
		this.email=React.createRef()
		this.pass=React.createRef()
	}
	Registerfunction(e)
	{
		e.preventDefault();
		let d={
			email:this.email.current.value,
			password:this.pass.current.value
		}
		axios.post("http://localhost:5000/register",d)
			.then((resp)=>{
				if(resp){
					Swal.fire({
						position:"top-right",
						icon:'success',
						title:'Successfully Registered'
					})

					this.backFunc()
				}              
				else 
				{
					Swal.fire({
						position:"top-right",
						icon:'error',
						title:'Something went wrong'
					})
				}
			})
			.catch((err)=>console.log(err));
	}
	backFunc()
	{
		var dest=document.getElementById("rightHalf")
		ReactDOM.render(<RightLink/>,dest)
	}
	confirmFunc()
	{
		var x=document.getElementById("Cpassr")
		var y=document.getElementById("passr")
		var btn = document.getElementById("regbtn")
		var dest=document.getElementById("Cdest")
		if(x.value!==y.value)
		{
				btn.disabled=true;
				ReactDOM.render(<small><i>Passwords Do Not Match</i></small>,dest)
		} else {
			btn.disabled=false;
			ReactDOM.render(<></>,dest)
		}
	}
	render(){
		return(
			<>
			<div id="regbox">
			<form  onSubmit={(e)=>this.Registerfunction(e)}  style={{marginLeft: "50px",
				marginRight: "50px",
				marginTop: "5%",
				position: "relative",
				width: "400px",
				padding: 0}} className="col-md-5 mx-auto">
			<div className="form-group">
			<h1 style={{WebkitTextFillColor:"white"}}>User Registration</h1><br/>
			<label style={{WebkitTextFillColor:"white"}} for="emailr">Student E-mail</label>
			<input type="email" className="form-control" id="emailr" placeholder="E-mail:" aria-describedby="emailHelp" ref={this.email} autoComplete="off" required/>
			</div>
			<div className="form-group">
			<label style={{WebkitTextFillColor:"white"}} for="passr">Password</label>
			<input type="password" className="form-control" id="passr" placeholder="Password:" ref={this.pass} autocomplete="off" required/><br/>
			<label style={{WebkitTextFillColor:"white"}} for="Cpassr">Confirm Password</label>
			<input type="password" className="form-control" id="Cpassr" placeholder="Confirm Password:" autoComplete="off" onChange={this.confirmFunc} required/><br/>
			<button type="submit" id="regbtn"className="btn btn-primary btn-sm m-10">Register</button>
			<span id='Cdest'></span>
			<br/><br/>
			</div>
			</form>
			</div>
			<div id="backButton">
			<ul>
			<li><a onClick={this.backFunc}>Go Back</a></li>
			</ul>
			</div>
			</>

		)
	}
}

export default Register;
