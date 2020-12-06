import React from 'react';
import {Link} from 'react-router-dom';
 
function Cricket(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Cricket Quiz</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Love IPL?? What about WCs?
        <br/>Let's test your knowledge<br/>  We introduce the Cricket Quiz!! <br/>
        We hope to see you there!!<br/>
        Time: 12:00 noon<br/>
        Date: 15/11/2020<br/>
        Amount:Rs.200<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default Cricket;