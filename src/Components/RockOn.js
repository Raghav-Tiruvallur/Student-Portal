import React from 'react';

import {Link} from 'react-router-dom';

function RockOn(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Rock On</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Get rocking with your band!!
        <br/>Let's ge the event started<br/>We hope you're excited too!!<br/>
        We hope to see you there!!<br/>
        Time: 4:00 pm<br/>
        Date: 19/11/2020<br/>
        Amount:Rs.300 per band<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default RockOn;