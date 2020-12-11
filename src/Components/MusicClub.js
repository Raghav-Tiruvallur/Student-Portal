import React from 'react';

import RockOn from '../images/RockOn.jpg';
import Karaoke from '../images/Karaoke.jpg';
import Concert from '../images/Concert.jpg';
import Card from './CardDes';

class SportsClub extends React.Component{
    render(){
    return(
        <div className= "clubpage">
                <h1 className="heading">The University Music Club</h1><br/>
                <p class="content" style={{WebkitTextFillColor:"white"}}>The Music Club of The University was started in 2017, to create an active group of musicians in our the University. Prior to it's formation there were a few individual bands that were genre specific and musicians had to choose to be a part of that or not, there was no option to do something different.
The main purpose of the music club was to bring together all the musicians in our the University and give them the platform to form their own bands and perform. In this regard, with over 150 members, the club has been a great success, with the number of bands in the University almost triple what they were two years ago. The club has always aimed at giving an opportunity to all musicians, and is open to all genres of music. We also conduct periodic workshops to help the musicians expand their understanding of the field.</p><br/>
                <p class="content" style={{WebkitTextFillColor:"white",border:"none"}}>List of Upcoming Events:</p>
                            <Card image={RockOn} title={'Rock On'} number={1} linkto={'/MusicClub/RockOn'}/>
                            <Card image={Karaoke} title={'Karaoke Night'} number={2} linkto={'/MusicClub/Karaoke'}/>
                            <Card image={Concert} title={'Concert Night'} number={3} linkto={'/MusicClub/Concert'}/>
            </div>
    )
}
}

export default SportsClub;
