import React,{useState,useEffect} from 'react';
import QQLogo from '../images/QQLogo.png'
import MusicClub from '../images.png'
import SportsClub from '../football.png'
import Card from './CardDes';
function Event()
{
        return(
            <div className= "clubpage">
                <h1 className="heading">University Club Portal</h1>
                	<p class="content" style={{WebkitTextFillColor:"white"}}>Student clubs and organizations are the glue that holds the University student community together. The Associated Students of the University (ASU) sponsors more than 300 student groups that you can join.The University offers a wide range of clubs and organizations that provide academic, cultural and personal support, as well as serve an advocacy role. They range from the Argentine Tango Club to the Women’s Law Forum—check out a list of them on the University website. If you don’t see a club that sparks your interest, start a new one!	Many of the more active student groups use Engage to organize themselves; check out all the things that they’re doing and find out how to get involved.At the University, there are so many ways to get involved, celebrate diversity and meet new people.</p>
                	<p class="content" style={{WebkitTextFillColor:"white",border:"none"}}>The following clubs have major university - level events happening shortly</p> 
           

                    <Card image={QQLogo} title={'QQ Club'}  linkto={'/QQClub'} number={1}/>
                  	<Card image={SportsClub} title={'Sports Club'} linkto={'/SportsClub'} number={2}/>
                    <Card image={MusicClub} title={'Music Club'} linkto={'/MusicClub'} number={3}/>
            </div>
        )
    }


export default Event;
