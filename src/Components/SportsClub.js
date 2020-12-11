import React from 'react';

import Cricket from '../images/Cricket.jpg';
import Basketball from '../images/Basketball.jpg';
import Football from '../images/Football.png';
import Card from './CardDes';
class SportsClub extends React.Component{
    render(){
    return(
        <div className= "clubpage">
                <h1 className="heading">The University Sports Club</h1>
                <p class="content" style={{WebkitTextFillColor:"white"}}>Sports Club is one of the most active clubs at the University adding a lot of zest to the student life in the campus. The club aims to promote sports activities among students, giving equal opportunity to all. Enthusiastic students volunteer to take up various responsibilities associated with running the Club. The Club conducts several tournaments every year including Volley Ball, Cricket, Badminton, Chess, Table Tennis, Football and Basketball. Apart from these, there are smaller, more informal events such as Kho Kho and Captain’s Ball scheduled on every Friday. The Club takes up new sports initiatives based on students’ interests and one of the initiatives taken up this year is starting Karate classes with qualified trainers amongst the students doing the teaching.<br/><br/></p>
                <p class="content" style={{WebkitTextFillColor:"white",border:"none"}}>List of Upcoming Tournaments:</p>
                            <Card image={Cricket} title={'Cricket'} number={1} linkto={'/SportsClub/Cricket'}/>
                            <Card image={Basketball} title={'Basketball'} number={2} linkto={'/SportsClub/Basketball'}/>
                            <Card image={Football} title={'Football'} number={3} linkto={'/SportsClub/Football'}/>
            </div>
    )
}
}

export default SportsClub;
