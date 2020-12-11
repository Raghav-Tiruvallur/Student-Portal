import React from 'react';
import ReactDOM from 'react-dom'
class About extends React.Component
{
        render()
        { 
        	var content=
            <div className= "clubpage">
                <h1 className="heading">About University</h1>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;PES University, located in Bangalore, India is one of the country’s leading teaching and research universities. The University is committed to providing “education for the real world” that inspires students to realize their potential. Our students graduate with the ability to adapt to an intellectually and technologically changing environment. Over the years, we have accomplished this with the participative efforts of the management, staff, students and parents.
</p><br/><br/>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;Our faculty is our most precious resource and one of the three pillars on which PES rests (the other two are students and infrastructure). Our faculty members develop and deliver the educational programs that bring excellent students to PES in the first place.</p><br/><br/>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;All our campuses incorporate infrastructure that matches the best in the country – ensuring that students have everything they need for a stimulating campus life. The classrooms are planned to maximize light and space and students have access to the latest computing and research facilities.</p><br/><br/>
                	<p class="content" style={{WebkitTextFillColor:"white",border:'none'}}>&nbsp;&nbsp;&nbsp;&nbsp;FOUNDER’S VISION

    We realize that our students represent the future of our society and we take our responsibility seriously. We ensure that the rock-solid foundation we help them build here – both, in terms of skills and values – will stand them in good stead no matter which career they choose.</p><br/><br/>


            </div>
        return(
        	ReactDOM.render(content,document.getElementById("root"))
        )
    }
}

export default About;
