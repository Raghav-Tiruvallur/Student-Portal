import React from 'react';

import {Link} from 'react-router-dom';

function CricketSport(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Cricket</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Cricket is a sport loved across the country.
        <br/>Wait is over...Let's play some Cricket<br/>The ultimate cricket tournament<br/>
        We hope to see you there!!<br/>
        Time: 2:00 pm<br/>
        Date: 17/11/2020<br/>
        Amount:Rs.200<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default CricketSport;