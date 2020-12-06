import React,{useState,useEffect} from 'react';
import QQLogo from '../images/QQLogo.png'
import MusicClub from '../images/MusicClub.jpg'
import SportsClub from '../images/SportsClub.jpg'
import Card from './CardDes';
function Event()
{
        return(
            <div>
                <h1 className="heading">Browse through the clubs</h1>
                <table>
                    <tbody>
                        <tr>
                             <td><Card image={QQLogo} title={'QQ Club'} text={'Who is ready for some quizzing!!'} linkto={'/QQClub'}/></td>
                            <td><Card image={SportsClub} title={'Sports Club'} text={'Biggest sports tournament of the college!! Go Time '} linkto={'/SportsClub'}/></td>
                            <td><Card image={MusicClub} title={'Music Club'} text={'Music Time'} linkto={'/MusicClub'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


export default Event;