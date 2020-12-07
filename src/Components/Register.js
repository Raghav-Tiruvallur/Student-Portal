import React,{useState} from 'react';
import Swal from 'sweetalert2';
import {Link,useHistory} from 'react-router-dom';
const axios=require('axios');
function Register()
{
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const history=useHistory();
    function Registerfunction(e)
    {
        e.preventDefault();
        let d={
            email:email,
            password:pass
        }
        axios.post("http://localhost:5000/register",d)
        .then((resp)=>{
             if(resp){
                Swal.fire({
                    position:"top-right",
                    icon:'success',
                    title:'Successfully Registered'
                  })
                history.push('/');
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

    return(

    <div className="container mt-5">
    <form  onSubmit={(e)=>Registerfunction(e)}  style={{marginLeft:"20%",marginRight:"20%",marginTop:"5%"}} className="col-md-5 mx-auto">
    <div class="form-group">
    <h1 style={{WebkitTextFillColor:"white"}}>Welcome To Student Portal</h1><br/>
    <h3 style={{WebkitTextFillColor:"white"}}>Register Here</h3><br/>
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputEmail1">Student Email</label>
    <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Student Email" onChange={(e)=>setemail(e.target.value)} required/>
    <small id="emailHelp" className="form-text text-muted">Trust us.<br/>We'll never share your id with anyone else.</small>
  </div>
  <div class="form-group">
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputPassword1">Password</label>
    <input type="password" value={pass} className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setpass(e.target.value)} required/>
  </div>
  <button type="submit"className="btn btn-primary btn-sm m-10">Register</button><br/><br/>
</form>
<Link to='/'  className="text-centre mt-5"><h5>Login Here</h5></Link>
</div>
);
}
 
export default Register;
