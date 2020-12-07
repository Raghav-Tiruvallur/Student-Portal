import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios'
import '../Design.css'
function Login()
{
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const history=useHistory();
    function Loginfunction(e)
    {
        e.preventDefault();
        let d={
            email:email,
            password:pass
        }
        axios.post("http://localhost:5000",d)
        .then((resp)=>{
          if(resp.data=="1")
             history.push('/event'); 
          else if(resp.data=="0"){
           Swal.fire({
             position:"top-right",
             icon:'error',
             title:'Check your credentials'
           })
          }
        })
        .catch((err)=>console.log(err));
    }


    return(
    <body>
    <div className="login-box">
    <form onSubmit={(e)=>Loginfunction(e)} style={{marginLeft:"20%",marginRight:"20%",marginTop:"5%"}} className="col-md-5 mx-auto">
    <div class="text-box">
    <h1>Welcome To Student Portal</h1>
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputEmail1">Student email</label>
    <i class="fa fa-user" aria-hidden="true"></i>
    <input type="email" value={email} className="form-control" id="exampleInputEmail1" placeholder="Student Email" aria-describedby="emailHelp" onChange={(e)=>setemail(e.target.value)} required/>
    <small id="emailHelp" className="form-text text-muted">Trust us.<br/>We'll never share your id with anyone else.</small>
  </div>
  <div class="text-box">
    <label style={{WebkitTextFillColor:"white"}} for="exampleInputPassword1">Password</label>
    <i class="fa fa-lock" aria-hidden="true"></i>
    <input type="password" value={pass}  className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setpass(e.target.value)} required/>
  </div>
  <button type="submit"className="btn btn-primary btn-sm m-10">Login</button><br/><br/>
</form>
<Link to='/register' className="text-centre mt-5"><h5>Register Here</h5></Link>
<div className="container">
<Link to='/AdminPage' className="text-centre mt-5"><h5>Admin Page</h5></Link></div>
</div>
</body>
);
}
export default Login;
