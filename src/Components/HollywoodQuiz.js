import React from 'react';
import {Link} from 'react-router-dom';

function Hollywood(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Hollywood Quiz</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Hollywood is one of the biggest industries in the world.  Everyone loves the movies.
        <br/>Now it's time to put your skills to the test.<br/>  We introduce the Hollywood Quiz where we test you on your Hollywood knowledge.<br/>
        We hope to see you there!!<br/>
        Time: 10:00 am<br/>
        Date: 15/11/2020<br/>
        Amount:Rs.200<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default Hollywood;