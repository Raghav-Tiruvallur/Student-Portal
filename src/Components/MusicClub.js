import React from 'react';

import RockOn from '../images/RockOn.jpg';
import Karaoke from '../images/Karaoke.jpg';
import Concert from '../images/Concert.jpg';
import Card from './CardDes';

class SportsClub extends React.Component{
    render(){
        const style={color:"blue",textAlign:"center",fontSize:20,fontFamily:"Lucida Console"};
    return(
        <>
        <div>
                <h1 className="heading">Welcome To Music Club</h1><br/>
                <p style={style}>Let the Music speak!!Join Us!!</p><br/>
                <p style={style}>The Events this year are:</p>
                <table>
                    <tbody>
                        <tr>
                            <td><Card image={RockOn} title={'Rock On'} text={'Keep those beats coming!!'} linkto={'/MusicClub/RockOn'}/></td>
                            <td><Card image={Karaoke} title={'Karaoke Night'} text={'Love singing? How about some karoake?'} linkto={'/MusicClub/Karaoke'}/></td>
                            <td><Card image={Concert} title={'Concert Night'} text={'The biggest night!! Are you ready for this?'} linkto={'/MusicClub/Concert'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
    )
}
}

export default SportsClub;