import React from 'react';

import {Link} from 'react-router-dom';

function Karaoke(){
    return(
        <>
        <div>
        <h1 style={{color:"green",textAlign:"center"}}>Karaoke Night</h1><br/>
        <p style={{color:'blue',textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Forget your sorrows here,it's about enjoying the music!!
        <br/>Come and enjoy Karaoke Night!!<br/>Feel the songs and sing to your heart's content<br/>
        We hope to see you there!!<br/>
        Time: 5:00 pm<br/>
        Date: 20/11/2020<br/>
        Amount:Rs.200 per hour<br/>
        #Payment to be made on the day 
        </p>
        </div>
       <Link to='/event/EventRegister'><button style={{marginLeft:'710px',marginTop:'100px',fontSize:20}} className="btn btn-primary btn-sm m-10">Register</button></Link>
        </>
    )
}
export default Karaoke;