import React from 'react';
import ReactDOM from 'react-dom';
import EventRegister from "./EventRegister.js"
import "../EventStyle.css"
function Hollywood(){
	return(
		<div class="clubpage">
		<div class="topHalf">
		<h1 style={{color:"#4caf50",textAlign:"center"}}>Hollywood Quiz</h1><br/>
		<p style={{WebkitTextFillColor:"white",textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Hollywood is one of the biggest industries in the world.  Everyone loves the movies.
        <br/>Now it's time to put your skills to the test.<br/>  We introduce the Hollywood Quiz where we test you on your Hollywood knowledge.<br/>
        We hope to see you there!!<br/>
        Time: 10:00 am<br/>
        Date: 15/11/2020<br/>
        Amount:Rs.200<br/>
		</p>
		<button style={{fontSize: "20px",
			position: "absolute",
			top: "25vh",
			right: "10vw"}} className="btn btn-primary btn-sm m-10" onClick={function(){ReactDOM.render(
				<EventRegister club="Quiz Club" event="Hollywood Quiz"/>,document.getElementById("bottomAnchor")
			)}}>Register</button>
		</div>
		<div class="bottomHalf">
		<div id="bottomAnchor"> </div>
		</div>
		</div>


	)
}
export default Hollywood;
