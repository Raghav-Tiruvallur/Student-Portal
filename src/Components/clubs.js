import React from 'react';
import ReactDOM from 'react-dom'
class Clubs extends React.Component
{
        render()
        { 
        	var content=
            <div className= "clubpage">
                <h1 className="heading">Clubs</h1>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>Student clubs and organizations are the glue that holds the University student community together. The Associated Students of the University (ASU) sponsors more than 300 student groups that you can join.The University offers a wide range of clubs and organizations that provide academic, cultural and personal support, as well as serve an advocacy role. They range from the Argentine Tango Club to the Women’s Law Forum—check out a list of them on the University website. If you don’t see a club that sparks your interest, start a new one!	Many of the more active student groups use Engage to organize themselves; check out all the things that they’re doing and find out how to get involved.At the University, there are so many ways to get involved, celebrate diversity and meet new people.
</p><br/><br/>
<p class="content" style={{WebkitTextFillColor:"white"}}>
Clubs Available Are 
<ul>
<li>Quiz Club</li>
<li>Sports Club</li>
<li>Music Club</li>
<li>Dance Club</li>
<li>IEEE Club</li>
<li>Hacking Club</li>
</ul>
</p>
      

            </div>
        return(
        	ReactDOM.render(content,document.getElementById("root"))
        )
    }
}

export default Clubs;
