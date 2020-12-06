import React from 'react';
import HollywoodQuiz from '../images/HollywoodQuiz.jpg'
import GKQuiz from '../images/GKQuiz.png';
import CricketQuiz from '../images/CricketQuiz.jpg';

import Card from './CardDes';

class QQ extends React.Component{
    render(){
        const style={color:"blue",textAlign:"center",fontSize:20,fontFamily:"Lucida Console"};
    return(
        <>
        <div>
                <h1 className="heading">Welcome To QQClub</h1><br/>
                <p style={style}>We love quizzes,we hope you do too!!</p><br/>
                <p style={style}>The Events this year are:</p>
                <table>
                    <tbody>
                        <tr>
                            <td><Card image={HollywoodQuiz} title={'Hollywood Quiz'} text={'Who is ready for some quizzing!!'} linkto={'/QQClub/HollywoodQuiz'}/></td>
                            <td><Card image={GKQuiz} title={'GK Quiz'} text={'Put your GK knowledge to the test '} linkto={'/QQClub/GKQuiz'}/></td>
                            <td><Card image={CricketQuiz} title={'Cricket Quiz'} text={'Love Cricket? So do we!! Test out your cricketing knowledge'} linkto={'/QQClub/CricketQuiz'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
    )
}
}

export default QQ;