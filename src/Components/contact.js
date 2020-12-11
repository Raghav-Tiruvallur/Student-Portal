import React from 'react';
import ReactDOM from 'react-dom'
class Contact extends React.Component
{
        render()
        { 
        	var content=
            <div className= "clubpage">
                <h1 className="heading">Contact University</h1>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>100 Feet Ring Road,
BSK III Stage,
Bangalore-560085

+91 80 26721983,
+91 80 26722108
</p><br/><br/>
      

            </div>
        return(
        	ReactDOM.render(content,document.getElementById("root"))
        )
    }
}

export default Contact;
