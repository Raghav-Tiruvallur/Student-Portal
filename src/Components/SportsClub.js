import React from 'react';

import Cricket from '../images/Cricket.jpg';
import Basketball from '../images/Basketball.jpg';
import Football from '../images/Football.png';
import Card from './CardDes';

class SportsClub extends React.Component{
    render(){
        const style={color:"blue",textAlign:"center",fontSize:20,fontFamily:"Lucida Console"};
    return(
        <>
        <div>
                <h1 className="heading">Welcome To Sports Club</h1><br/>
                <p style={style}>Get ready to play against the best</p><br/>
                <p style={style}>The Events this year are:</p>
                <table>
                    <tbody>
                        <tr>
                            <td><Card image={Cricket} title={'Cricket'} text={'Play some Cricket'} linkto={'/SportsClub/Cricket'}/></td>
                            <td><Card image={Basketball} title={'Basketball'} text={'Love watching NBA? Showcase your skills on the real court!!'} linkto={'/SportsClub/Basketball'}/></td>
                            <td><Card image={Football} title={'Football'} text={'Play some Football'} linkto={'/SportsClub/Football'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
    )
}
}

export default SportsClub;