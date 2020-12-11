import React,{useState} from 'react';
import axios from 'axios';
import {createBrowserHistory} from 'history';
import Swal from 'sweetalert2';
class EventRegister extends React.Component
{
	constructor(props)
	{
		super(props)
		this.RegisterfunctionEvent=this.RegisterfunctionEvent.bind(this)
		this.render=this.render.bind(this)
		this.email=React.createRef()
		this.ename=React.createRef()
		this.club=React.createRef()
	}
	RegisterfunctionEvent(e)
	{
		e.preventDefault()
		let d={
			email:this.email.current.value,
			Event_Name:this.ename.current.value,
			Club:this.club.current.value
		}
		axios.post("http://localhost:5000/event/EventRegister",d)
			.then((resp)=>{
				if(resp){
					Swal.fire({
						position:"top-right",
						icon:'success',
						title:'Successfully Registered'
					});
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
    render()
    {
    	return(
       		<div id="regboxE">
			<form  onSubmit={(e)=>this.RegisterfunctionEvent(e)}  style={{marginLeft: "50px",
				marginRight: "50px",
				marginTop: "5%",
				position: "relative",
				width: "400px",
				padding: 0}} className="col-md-5 mx-auto">
			<div className="form-group">
			<label style={{WebkitTextFillColor:"white"}} for="email">Student E-mail</label>
			<input type="email" className="form-control" id="email" placeholder="E-mail:" aria-describedby="emailHelp" ref={this.email} autoComplete="on" required/>
			</div>
			<div className="form-group">
			<label style={{WebkitTextFillColor:"white"}} for="club">Club</label>
			<input type="text" className="form-control" id="club"ref={this.club} value={this.props.club} readonly required/><br/>
			<label style={{WebkitTextFillColor:"white"}} for="ename">Event Name</label>
			<input type="text" className="form-control" id="ename" ref={this.ename} value={this.props.event} readonly required/><br/>
			<button type="submit" id="regbtn"className="btn btn-primary btn-sm m-10">Register</button>
			</div>
			</form>
</div>
)
}
}
export default EventRegister;
