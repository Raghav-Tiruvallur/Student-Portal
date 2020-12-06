import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function EventRegister()
{
    const styles={
        textAlign:"center",
        color:"green",
        fontSize:30,
        fontFamily:"Lucida Console"
    }
    const [email,setemail]=useState('');
    const [club,setclub]=useState('');
    const [event,setevent]=useState('');
    const history=useHistory();
    function RegisterfunctionEvent(e)
    {
        e.preventDefault();
        let d={
            email:email,
            Event_Name:event,
            Club:club
        }
        axios.post("http://localhost:5000/event/EventRegister",d)
        .then((resp)=>{
            if(resp){
                alert("Succesful Register");
                history.push('/event');
            }              
            else 
                alert("Something went wrong");
        })
        .catch((err)=>console.log(err));
    }
    return(
        <div className="container mt-5">
    <form  onSubmit={(e)=>RegisterfunctionEvent(e)}  style={{marginLeft:"20%",marginRight:"20%",marginTop:"5%"}} className="col-md-5 mx-auto">
    <div class="form-group">
    <h1 style={{WebkitTextFillColor:"white"}}>Registration Confirmation</h1><br/>
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputEmail1">Student Email</label>
    <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Student Email" onChange={(e)=>setemail(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputPassword1">Event Name</label>
    <input type="text" value={event} className="form-control"placeholder="Event Name" onChange={(e)=>setevent(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputPassword1">Club</label>
    <input type="text" value={club} className="form-control"placeholder="Club" onChange={(e)=>setclub(e.target.value)} required/>
  </div>
  <button type="submit"className="btn btn-primary btn-sm m-10">Confirm</button><br/><br/>
</form>
</div>
)
}
export default EventRegister;