import React from 'react';
import ReactDOM from 'react-dom';
import EventRegister from "./EventRegister.js"
import "../EventStyle.css"
function Cricket(){
	return(
		<div class="clubpage">
		<div class="topHalf">
		<h1 style={{color:"#4caf50",textAlign:"center"}}>Cricket Tournament</h1><br/>
		<p style={{WebkitTextFillColor:"white",textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Cricket is a sport loved across the country.
        <br/>Wait is over...Let's play some Cricket<br/>The ultimate cricket tournament<br/>
        We hope to see you there!!<br/>
        Time: 2:00 pm<br/>
        Date: 17/11/2020<br/>
        Amount:Rs.200<br/>
		</p>
		<button style={{fontSize: "20px",
			position: "absolute",
			top: "25vh",
			right: "10vw"}} className="btn btn-primary btn-sm m-10" onClick={function(){ReactDOM.render(
				<EventRegister club="Sports Club" event="Cricket"/>,document.getElementById("bottomAnchor")
			)}}>Register</button>
		</div>
		<div class="bottomHalf">
		<div id="bottomAnchor"> </div>
		</div>
		</div>


	)
}
export default Cricket;
