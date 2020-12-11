import React from 'react';
import ReactDOM from 'react-dom';
import EventRegister from "./EventRegister.js"
import "../EventStyle.css"
function GK(){
	return(
		<div class="clubpage">
		<div class="topHalf">
		<h1 style={{color:"#4caf50",textAlign:"center"}}>General Knowledge Quiz</h1><br/>
		<p style={{WebkitTextFillColor:"white",textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>GK(General Knowledge) is very important in this age. 
        <br/>So let's take your knowledge to the test.<br/>  We introduce the GK Quiz!! Take part and test yourself!!<br/>
        We hope to see you there!!<br/>
        Time: 11:00 am<br/>
        Date: 15/11/2020<br/>
        Amount:Rs.200<br/>
		</p>
		<button style={{fontSize: "20px",
			position: "absolute",
			top: "25vh",
			right: "10vw"}} className="btn btn-primary btn-sm m-10" onClick={function(){ReactDOM.render(
				<EventRegister club="Quiz Club" event="GK Quiz"/>,document.getElementById("bottomAnchor")
			)}}>Register</button>
		</div>
		<div class="bottomHalf">
		<div id="bottomAnchor"> </div>
		</div>
		</div>


	)
}
export default GK;
