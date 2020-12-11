import React from 'react';
import ReactDOM from 'react-dom';
import EventRegister from "./EventRegister.js"
import "../EventStyle.css"
function Football(){
	return(
		<div class="clubpage">
		<div class="topHalf">
		<h1 style={{color:"#4caf50",textAlign:"center"}}>Football Tournament</h1><br/>
		<p style={{WebkitTextFillColor:"white",textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Really want to play some football?? Let's get kicking!!
        <br/>We are there for you,let's get the match started<br/>You excited? We sure are!!<br/>
        We hope to see you there!!<br/>
        Time: 12:00 noon<br/>
        Date: 20/11/2020<br/>
        Amount:Rs.300 per team<br/>
		</p>
		<button style={{fontSize: "20px",
			position: "absolute",
			top: "25vh",
			right: "10vw"}} className="btn btn-primary btn-sm m-10" onClick={function(){ReactDOM.render(
				<EventRegister club="Sports Club" event="Football"/>,document.getElementById("bottomAnchor")
			)}}>Register</button>
		</div>
		<div class="bottomHalf">
		<div id="bottomAnchor"> </div>
		</div>
		</div>


	)
}
export default Football;
