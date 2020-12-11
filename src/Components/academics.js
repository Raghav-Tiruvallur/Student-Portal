import React from 'react';
import ReactDOM from 'react-dom'
class Academics extends React.Component
{
        render()
        { 
        	var content=
            <div className= "clubpage">
                <h1 className="heading">Academics</h1>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>Today, the programs at PES University are sought after by students from around the country. Leading industries choose PES University when they need the right talent. One of the key reasons for this is the University’s focus on admitting the best talent in India and abroad. We are proud about the tradition of crème de la crème of CET, PESSAT and other national level entrance exams consistently preferring a PES Institution. The University is committed to excellence in education that meets the expectations of the students aspiring for enriching academic and professional careers.

PES University does NOT entertain any middlemen / consultants in its admissions process.

All payments should be made at the University Desk.
</p><br/><br/>
<p class="content" style={{WebkitTextFillColor:"white"}}>
Courses Offered are: 
<ul>
<li>Computer Science and Engineering</li>
<li>Electronics and Communication Engineering</li>
<li>Management</li>
<li>Mechanical Engineering</li>
<li>Electrcal Engineering</li>
<li>Biotechnology</li>
<li>Civil Engineering</li>
</ul>
</p>
      

            </div>
        return(
        	ReactDOM.render(content,document.getElementById("root"))
        )
    }
}

export default Academics;
