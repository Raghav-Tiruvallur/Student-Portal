import React from 'react';
import ReactDOM from 'react-dom';
import EventRegister from "./EventRegister.js"
import "../EventStyle.css"
function Karaoke(){
	return(
		<div class="clubpage">
		<div class="topHalf">
		<h1 style={{color:"#4caf50",textAlign:"center"}}>Karaoke Night</h1><br/>
		<p style={{WebkitTextFillColor:"white",textAlign:"center",fontFamily:"Lucida Console",fontSize:20}}>Forget your sorrows here,it's about enjoying the music!!

        <br/>Come and enjoy Karaoke Night!!<br/>Feel the songs and sing to your heart's content<br/>
        We hope to see you there!!<br/>
        Time: 5:00 pm<br/>
        Date: 20/11/2020<br/>
        Amount:Rs.200 per hour<br/>
		</p>
		<button style={{fontSize: "20px",
			position: "absolute",
			top: "25vh",
			right: "10vw"}} className="btn btn-primary btn-sm m-10" onClick={function(){ReactDOM.render(
				<EventRegister club="Music Club" event="Karaoke Night"/>,document.getElementById("bottomAnchor")
			)}}>Register</button>
		</div>
		<div class="bottomHalf">
		<div id="bottomAnchor"> </div>
		</div>
		</div>


	)
}
export default Karaoke
