import React from 'react';

import {Link} from 'react-router-dom';

function Football(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Football</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Really want to play some football?? Let's get kicking!!
        <br/>We are there for you,let's get the match started<br/>You excited? We sure are!!<br/>
        We hope to see you there!!<br/>
        Time: 12:00 noon<br/>
        Date: 20/11/2020<br/>
        Amount:Rs.300 per team<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default Football;