import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import axios from 'axios'
import '../Design.css'
import Register from './Register.js';
import RightLink from "./RightLink.js"

class Login extends React.Component
{
	constructor(props)
	{
		super(props)
		this.Loginfunction=this.Loginfunction.bind(this)
		this.render=this.render.bind(this)
		this.email=React.createRef()
		this.pass=React.createRef()
		this.adminLoginFunction=this.adminLoginFunction.bind(this)
	}
	Loginfunction(e)
	{
		var d={
			email:this.email.current.value,
			password:this.pass.current.value
		}
		axios.post("http://localhost:5000",d)
			.then((resp)=>{
				if(resp.data===1)
					{	
						sessionStorage.setItem("status","1")
						this.props.history.push('/event')
					} 
				else{
					Swal.fire({
						position:"top-right",
						icon:'error',
						title:'Invalid E-mail or Password'
					})
				}
			})
			.catch((err)=>console.log(err));
	}
	adminLoginFunction(e)
	{
		if(this.email.current.value==="admin@mail.com"&&this.pass.current.value==="admin")
		{
			this.history.push("/AdminPage")
		}
		else
		{
			Swal.fire({
						position:"top-right",
						icon:'error',
						title:'Invalid E-mail or Password'})
		}
		
	}
	func(e)
	{
		var x=document.getElementById("reg")
		if(e.type==="mouseover")
			x.style.color="#4caf50"
		else if(e.type==="mouseleave")
			x.style.color="white"
	}
	register(e)
	{
		var dest=document.getElementById("rightHalf")
		ReactDOM.render(<Register/>,dest)
	}
	render(){
		return(<>
	<div id="leftHalf">
		<div className="login-box">
		<form style={{width: "600px"}} className="col-md-5 mx-auto">
			<div className="text-box">
				<h1>University Student Portal</h1>
				<label style={{WebkitTextFillColor:"white"}} htmlFor="email">Student E-mail</label>
				<i className="fa fa-user" aria-hidden="true"></i>
				<input type="email" className="form-control" id="email" placeholder="E-mail:" aria-describedby="emailHelp" ref={this.email} autoComplete="off" required/>
			</div>
			
			<div className="text-box">
				<label style={{WebkitTextFillColor:"white"}} htmlFor="pass">Password</label>
				<i className="fa fa-lock" aria-hidden="true"></i>
				<input type="password" className="form-control" id="pass" placeholder="Password:" ref={this.pass} autoComplete="off" required/>
			</div>
			<button type="button" onClick={this.Loginfunction} className="btn btn-primary btn-sm m-10">Login</button>&nbsp;&nbsp;
			<button type="button" onClick={this.adminLoginFunction} className="btn btn-primary btn-sm m-10">Admin Login</button>
			<a style={{position:"relative",left:96,color:"white",textDecoration:"none",cursor:"pointer"}}id="reg" onMouseOver={this.func} onClick={this.register} onMouseLeave={this.func}><i>Don't have an account? Register here</i></a>
		</form>
		</div>
	</div>
	<div id="rightHalf">
		<RightLink/>
	</div>
	</>
		
	);
}
}
export default Login;
