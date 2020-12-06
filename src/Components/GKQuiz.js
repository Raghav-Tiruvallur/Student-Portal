import React from 'react';
import {Link} from 'react-router-dom';

function GK(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>GK Quiz</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>GK(General Knowledge) is very important in this age. 
        <br/>So let's take your knowledge to the test.<br/>  We introduce the GK Quiz!! Take part and test yourself!!<br/>
        We hope to see you there!!<br/>
        Time: 11:00 am<br/>
        Date: 15/11/2020<br/>
        Amount:Rs.200<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default GK;