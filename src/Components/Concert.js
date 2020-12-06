import React from 'react';

import {Link} from 'react-router-dom';

function Concert(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Concert Night</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>This is the night you've all been waiting for!!
        <br/>The stage is going to be on fire!!<br/>You're all going to have an amazing time!!!<br/>
        We hope to see you there!!<br/>
        Time: 6:00 pm<br/>
        Date: 21/11/2020<br/>
        Amount:Rs.500 per head<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default Concert;